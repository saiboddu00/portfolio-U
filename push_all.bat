@echo off
echo Staging all changes for Render fix...
git add .
git commit -m "Fix: Push all configuration and CSS changes"
git push origin main
echo Done!
pause
