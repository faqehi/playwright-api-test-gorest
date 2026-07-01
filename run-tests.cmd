@echo off
echo ===================================================
echo Select Environment to Run Playwright Tests:
echo 1. Test Environment (Default)
echo 2. UAT Environment
echo 3. Live Environment
echo ===================================================
set /p choice="Enter choice (1-3): "

if "%choice%"=="2" (
    set ENV=uat
) else if "%choice%"=="3" (
    set ENV=live
) else (
    set ENV=test
)

echo Running API Tests against %ENV%...
call npx playwright test tests
pause