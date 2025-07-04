// fix-case.js
const fs   = require('fs');
const path = require('path');

// PascalCase helper
function toPascal(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 1) Renomeia todos os .jsx em src/pages (e subpastas) para PascalCase.jsx
function walkAndRename(dir) {
  for (let name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walkAndRename(full);
    } else if (full.endsWith('.jsx')) {
      const base   = path.basename(full, '.jsx');
      const pascal = toPascal(base);
      if (base !== pascal) {
        const target = path.join(dir, pascal + '.jsx');
        fs.renameSync(full, target);
        console.log(`Renamed: ${name} → ${pascal}.jsx`);
      }
    }
  }
}

// 2) Corrige os imports no src/App.jsx para usar PascalCase nos paths
function fixImports(appFile) {
  let content = fs.readFileSync(appFile, 'utf8');

  // painel
  content = content.replace(
    /from\s+["']\.\/pages\/painel\/([a-z]\w*)["']/g,
    (_, m) => `from "./pages/painel/${toPascal(m)}"`
  );

  // demais páginas
  content = content.replace(
    /from\s+["']\.\/pages\/([a-z]\w*)["']/g,
    (_, m) => `from "./pages/${toPascal(m)}"`
  );

  fs.writeFileSync(appFile, content);
  console.log(`Imports updated in ${appFile}`);
}

// Execução
const PAGES    = path.join(__dirname, 'src', 'pages');
const APP_FILE = path.join(__dirname, 'src', 'App.jsx');

walkAndRename(PAGES);
fixImports(APP_FILE);
