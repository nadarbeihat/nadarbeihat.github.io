# Project 04 — Personal Portfolio (Capstone)

Personal portfolio of Nada Alrbeihat, built from scratch with semantic HTML5, CSS3 (Flexbox + media queries) and vanilla JavaScript. No templates, frameworks or UI libraries.

## Files
- `index.html` — page structure (navbar, About Me, Skills, Projects, Hobbies, Contact, Footer)
- `style.css` — sky-blue design, light/dark theme variables, responsive layout, RTL support
- `script.js` — theme switcher, EN/AR translation dictionary, mobile menu, form validation
- `assets/` — profile photo and CV

## Features
- **Theme switcher**: click -> `click` event -> `toggleTheme()` -> `data-theme` changes on `<html>` -> CSS variables change the colors.
- **Language switcher EN/AR (bonus)**: a `translations` object plus `data-i18n` attributes; sets `lang` and `dir="rtl"` / `dir="ltr"`.
- **Responsive**: checked at 375px width, no horizontal overflow.

## Run
Open `index.html` in a browser. No build step needed.
