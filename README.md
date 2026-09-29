# Rahmin Amer Zaman — Portfolio

A cyberpunk / game-HUD style developer portfolio. Plain HTML, CSS and JavaScript: no build step and no dependencies.

**Features**
- Boot-screen intro
- Interactive "web" background that reaches toward your cursor
- Glitch text and a typing role rotator
- 3D-tilt project cards with project filters
- Achievement toasts and a Konami-code easter egg
- Responsive down to 320px, keyboard accessible, and respects "reduce motion"

## Run locally

Open the folder in VS Code and run:

```bash
npx serve .
```

Then open the address it prints. You can also use the VS Code **Live Server** extension. Opening `index.html` directly may not work, because the script is a JavaScript module.

## Edit the content

Everything is in the top of `main.js`:

- `LINKS`: GitHub, **LinkedIn (add your URL, the link stays hidden until you do)**, email
- `ROLES`: the rotating job titles in the hero
- `SKILLS`: the skill tree
- `PROJECTS`: your projects (details taken from each GitHub README)

The about text, education and achievements are in `index.html`.

Your photo is `assets/rahmin-720.webp` / `rahmin-360.webp`. To update your CV, replace `assets/Rahmin_Amer_Zaman_CV.pdf` and keep the same file name.

## Deploy

1. Push this folder to a public GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**. Leave the build command empty, then click **Deploy**.

Every `git push` to `main` redeploys the site automatically.
