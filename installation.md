Here’s a simple, practical way to install **TypeScript** and set up a `tsconfig.json` file from scratch.

---

## 1. Install TypeScript

### Option A: Install locally (recommended for projects)

```bash
npm init -y
npm install typescript --save-dev
```

### Option B: Install globally

```bash
npm install -g typescript
```

---

## 2. Initialize `tsconfig.json`

Run this command in your project folder:

```bash
npx tsc --init
```

This will generate a default `tsconfig.json`.

---

## 3. Basic `tsconfig.json` Example

Here’s a clean, commonly used config:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 4. Project Structure

Example structure:

```
project/
│
├── src/
│   └── index.ts
├── dist/
├── tsconfig.json
├── package.json
```

---

## 5. Compile TypeScript

```bash
npx tsc
```

This compiles `.ts` files from `src` → `dist`.

---

## 6. Watch Mode (optional)

```bash
npx tsc --watch
```

---

## 7. Add Script to package.json (optional)

```json
"scripts": {
  "build": "tsc",
  "dev": "tsc --watch"
}
```

Then run:

```bash
npm run build
```

---

## Quick Tips

* Always prefer **local install** for projects.
* Use `strict: true` for better type safety.
* Customize `target` depending on your runtime (Node.js/browser).