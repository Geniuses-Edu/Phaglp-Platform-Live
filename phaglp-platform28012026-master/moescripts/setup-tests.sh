#!/usr/bin/env bash
set -e

echo "📦 Installing test dependencies..."

npm install --save-dev \
  jest \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest-environment-jsdom

echo "✅ Test dependencies installed successfully."
