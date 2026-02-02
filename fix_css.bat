@echo off
echo Committing CSS fix for Render...
git add src/index.css
git commit -m "Fix: Refactor CSS variables to :root for production"
git push origin main
echo Done!
pause
