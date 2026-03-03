# Fix GitHub Pages URL - Use Root Path

## Problem
Your site works at: `https://subhakantamuduli83-sudo.github.io/profile-2-/personal-website-3d/`  
But you want: `https://subhakantamuduli83-sudo.github.io/profile-2-/`

## Solution - Move files to repo root

### Option A: Using Git (Command line)

1. Clone your repo (if not already):
   ```
   git clone https://github.com/subhakantamuduli83-sudo/profile-2-.git
   cd profile-2-
   ```

2. Move files from personal-website-3d to root:
   - Move `index.html`, `styles.css`, `main.js` to the root folder
   - Move the `assets` folder to the root folder

3. Remove the empty personal-website-3d folder

4. Push changes:
   ```
   git add .
   git commit -m "Move site to root for GitHub Pages"
   git push
   ```

### Option B: Using GitHub website

1. Go to https://github.com/subhakantamuduli83-sudo/profile-2-
2. Open the `personal-website-3d` folder
3. Click each file (index.html, styles.css, main.js) → "Edit" → Move to root
4. For the `assets` folder: create new folder `assets` at root, move profile.png into it
5. Delete the now-empty `personal-website-3d` folder

### After moving
Wait 1–2 minutes, then visit: **https://subhakantamuduli83-sudo.github.io/profile-2-/**
