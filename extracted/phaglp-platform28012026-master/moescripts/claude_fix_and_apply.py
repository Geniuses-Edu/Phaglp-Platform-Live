import os
import subprocess
import re
from anthropic import Client

# ------------------------------
# Configuration
# ------------------------------
API_KEY = os.getenv("ANTHROPIC_API_KEY")
BUILD_LOG = "logs/build-errors.log"

if not API_KEY:
    raise ValueError("Please set the ANTHROPIC_API_KEY environment variable")

client = Client(api_key=API_KEY)

# ------------------------------
# Helper Functions
# ------------------------------
def get_build_errors(log_file: str) -> str:
    """Read Next.js build errors from log file."""
    if os.path.exists(log_file):
        with open(log_file, "r") as f:
            return f.read()
    return ""

def send_to_claude(error_message: str) -> str:
    """Send errors to Claude AI and get suggested fixes."""
    prompt = f"""
You are an expert Next.js, TypeScript, and ESLint developer.
I have the following build errors from a Next.js project:

{error_message}

Please provide fixes in the following format:

--- <file_path> ---
<corrected code here>

Do not include explanations outside of code blocks. Only output file paths and updated code.
"""
    response = client.completions.create(
        model="claude-3.0",
        max_tokens_to_sample=2000,
        prompt=prompt
    )
    return response.completion

def apply_fixes(fixes: str):
    """
    Apply fixes automatically.
    Expects Claude output in the format:
    --- file_path ---
    <code>
    """
    matches = re.findall(r"--- (.+?) ---\n([\s\S]+?)(?=\n---|$)", fixes)
    if not matches:
        print("⚠️ No fixes detected in Claude output.")
        return

    for file_path, code in matches:
        file_path = file_path.strip()
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w") as f:
            f.write(code.strip())
        print(f"✅ Applied fix to {file_path}")

def commit_and_push_changes():
    """Commit fixes and push to the current branch."""
    subprocess.run(["git", "config", "--global", "user.name", "github-actions"], check=True)
    subprocess.run(["git", "config", "--global", "user.email", "actions@github.com"], check=True)
    subprocess.run(["git", "add", "."], check=True)
    commit_result = subprocess.run(
        ["git", "commit", "-m", "Auto-applied Next.js fixes via Claude AI"],
        check=False
    )
    if commit_result.returncode == 0:
        subprocess.run(["git", "push"], check=True)
        print("✅ Changes committed and pushed.")
    else:
        print("ℹ️ No changes to commit.")

# ------------------------------
# Main Function
# ------------------------------
def main():
    errors = get_build_errors(BUILD_LOG)
    if not errors.strip():
        print("✅ No build errors detected.")
        return

    print("📤 Sending build errors to Claude...")
    fixes = send_to_claude(errors)
    print("📥 Claude suggested fixes:\n")
    print(fixes)

    apply_fixes(fixes)
    commit_and_push_changes()

# ------------------------------
# Run
# ------------------------------
if __name__ == "__main__":
    main()
