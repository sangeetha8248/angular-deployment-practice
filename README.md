# TaskFlow — Angular + Tailwind Deployment Practice

A small task manager made specifically for learning the deployment workflow.

## What this project teaches

- Angular standalone components
- Angular template syntax
- `ngModel` and forms
- Basic TypeScript state
- Tailwind CSS utility classes
- Production builds
- Git and GitHub workflow
- Deployment of a frontend application

## Requirements

Use a current Node.js version supported by Angular. Angular's current installation guide lists Node.js 22.22.3 or newer.

## 1. Install dependencies

```bash
npm install
```

## 2. Run locally

```bash
npm start
```

Open http://localhost:4200 in your browser.

## 3. Create a production build

```bash
npm run build
```

The production files will be generated under:

```text
dist/angular-deployment-practice/browser/
```

## 4. Git practice

After confirming the app works:

```bash
git init
git status
git add .
git commit -m "Initial Angular task app"
```

Then create an empty repository on GitHub and connect it as your remote.

## 5. Suggested practice changes

Make one change at a time and commit each change:

1. Change the app title.
2. Add a priority field.
3. Add a dark mode.
4. Add a task counter.
5. Change the page background.

This lets you practice the real cycle:

```text
edit → test → git status → git add → git commit → git push → deploy
```

## Project structure

```text
angular-deployment-practice/
├── public/
├── src/
│   ├── app/
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── task.model.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .editorconfig
├── .gitignore
├── .postcssrc.json
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
└── tsconfig.json
```
