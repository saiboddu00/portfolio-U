@echo off
echo Fixing visual effects (hover/glow)...
git add src/index.css
git commit -m "Fix: Restore Tailwind theme colors for utility classes"
git push origin main
echo Done!
pause
