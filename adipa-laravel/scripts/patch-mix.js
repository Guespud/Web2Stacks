const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, '..', 'node_modules', 'laravel-mix', 'src', 'builder', 'webpack-plugins.js');

if (!fs.existsSync(target)) {
  process.exit(0);
}

const source = fs.readFileSync(target, 'utf8');
const needle = "    if (process.env.NODE_ENV !== 'test') {\n        plugins.push(new WebpackBar({ name: 'Mix' }));\n    }\n";
const replacement = "    if (process.env.NODE_ENV !== 'test' && process.env.MIX_ENABLE_PROGRESS === '1') {\n        plugins.push(new WebpackBar({ name: 'Mix' }));\n    }\n";

if (source.includes(replacement)) {
  process.exit(0);
}

if (!source.includes(needle)) {
  console.warn('patch-mix: expected snippet not found');
  process.exit(0);
}

fs.writeFileSync(target, source.replace(needle, replacement));
console.log('patch-mix: webpackbar disabled by default');
