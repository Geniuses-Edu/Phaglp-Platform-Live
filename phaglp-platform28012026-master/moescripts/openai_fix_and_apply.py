import os
import subprocess
import re
import openai
from openai import OpenAI

# ------------------------------
# Configuration
# ------------------------------
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
BUILD_LOG = "logs/build-errors.log"

if not OPENAI_API_KEY:
    raise ValueError("Please set the OPENAI_API_KEY environment variable")

client = OpenAI(api_key=OPENAI_API_KEY)

# ------------------------------
# Helper Functions
# ------------------------------
def get_build_errors(log_file: str) -> str:
    if os.path.exists(log_file):
        with open(log_file, "r") as f:
            return f.read()
    return ""

def send_to_openai(error_message: str) -> str:
    """Send errors to OpenAI GPT using the new SDK interface."""
    prompt = f"""
You are an expert Next.js, TypeScript, and ESLint developer.
I have the following build errors from a Next.js project:

{error_message}

Please provide fixes in the following format:

--- <file_path> ---
<corrected code here>

Do not include explanations outside of code blocks. Only output file paths and updated code.
"""
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
        max_tokens=2000,
    )
    return response.choices[0].message.content

def apply_fixes(fixes: str):
    matches = re.findall(r"--- (.+?) ---\n([\s\S]+?)(?=\n---|$)", fixes)
    if not matches:
        print("⚠️ No fixes detected in GPT output.")
        return

    for file_path, code in matches:
        file_path = file_path.strip()
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        with open(file_path, "w") as f:
            f.write(code.strip())
        print(f"✅ Applied fix to {file_path}")

def commit_and_push_changes():
    subprocess.run(["git", "config", "--global", "user.name", "github-actions"], check=True)
    subprocess.run(["git", "config", "--global", "user.email", "actions@github.com"], check=True)
    subprocess.run(["git", "add", "."], check=True)
    commit_result = subprocess.run(
        ["git", "commit", "-m", "Auto-applied Next.js fixes via OpenAI"],
        check=False
    )
    if commit_result.returncode == 0:
        # Use GITHUB_TOKEN for authentication
        github_token = os.getenv("GITHUB_TOKEN")
        repo = os.getenv("GITHUB_REPOSITORY")
        if github_token and repo:
            subprocess.run(
                ["git", "remote", "set-url", "origin", f"https://x-access-token:{github_token}@github.com/{repo}.git"],
                check=True
            )
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

    print("📤 Sending build errors to OpenAI GPT...")
    try:
        fixes = send_to_openai(errors)
    except Exception as e:
        print(f"❌ OpenAI API request failed: {e}")
        return

    print("📥 GPT suggested fixes:\n")
    print(fixes)

    apply_fixes(fixes)
    commit_and_push_changes()

# ------------------------------
# Run
# ------------------------------
if __name__ == "__main__":
    main()
