@echo off
echo Committing fix for Render deployment...
git add vite.config.js
git commit -m "Fix: Update build output to dist for Render"
git push origin main
echo Done!
pause
