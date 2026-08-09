#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexPath = path.join(root, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const styleMatch = html.match(/<style>\n([\s\S]*?)\n<\/style>/);
if (!styleMatch) throw new Error('Bloco de estilos não encontrado.');
fs.writeFileSync(path.join(root, 'styles.css'), `${styleMatch[1].trim()}\n`);
html = html.replace(styleMatch[0], '<link rel="stylesheet" href="./styles.css?v=8">');

const errorHandler = /<script>window\.addEventListener\('error',[\s\S]*?<\/script>\n/;
if (!errorHandler.test(html)) throw new Error('Tratador de erro inline não encontrado.');
html = html.replace(errorHandler, '<script src="security-bootstrap.js"></script>\n');

const appMatch = html.match(/<script>(\(\(\)=>\{'use strict';function buildDataprevCourse\(\)[\s\S]*?\}\)\(\))<\/script>/);
if (!appMatch) throw new Error('Aplicação inline não encontrada.');
fs.writeFileSync(path.join(root, 'app.js'), `${appMatch[1].trim()}\n`);
html = html.replace(appMatch[0], '<script src="app.js"></script>');

fs.writeFileSync(indexPath, html);
console.log('CSS e JavaScript da aplicação extraídos para arquivos externos.');
