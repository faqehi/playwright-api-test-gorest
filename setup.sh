#!/bin/bash
echo "==================================================="
echo "Installing Framework Dependencies and Browsers..."
echo "==================================================="

# Run installations and handle execution failures safely
npm install && npx playwright install --with-deps

echo "==================================================="
echo "Setup Complete! You can now run the tests."
echo "==================================================="
