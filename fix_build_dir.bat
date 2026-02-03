@echo off
echo Fixing build directory for Render...
git add vite.config.js
git commit -m "Fix: Change build output back to 'build' folder"
git push origin main
echo Done!
pause
