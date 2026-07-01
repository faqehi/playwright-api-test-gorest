#!/bin/bash
echo "==================================================="
echo "Select Environment to Run Playwright Tests:"
echo "1. Test Environment (Default)"
echo "2. UAT Environment"
echo "3. Live Environment"
echo "==================================================="
read -p "Enter choice (1-3): " choice

if [ "$choice" == "2" ]; then
    export ENV=uat
elif [ "$choice" == "3" ]; then
    export ENV=live
else
    export ENV=test
fi

echo "Running API Tests against $ENV..."
npx playwright test tests