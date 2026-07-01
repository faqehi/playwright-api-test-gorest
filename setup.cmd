@echo off
echo ===================================================
echo Installing Framework Dependencies and Browsers...
echo ===================================================
call npm install
call npx playwright install --with-deps
echo ===================================================
echo Setup Complete! You can now run the tests.
echo ===================================================
pause