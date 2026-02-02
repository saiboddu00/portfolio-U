@echo off
echo Initializing Git repository...
git init
if %errorlevel% neq 0 (
    echo Error: Git not found or init failed. Please ensure Git is installed.
    pause
    exit /b %errorlevel%
)

echo Adding files...
git add .

echo Committing files...
git commit -m "Initial commit - Portfolio V1"

echo Renaming branch to main...
git branch -M main

echo Adding remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/saiboddu00/portfolio-U.git

echo Pushing to GitHub...
echo (You may be asked to sign in)
git push -u origin main

echo Done!
pause
