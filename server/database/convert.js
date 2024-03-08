// convertXlsxToJson.js
const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('./clubs.xlsx'); // Replace 'yourfile.xlsx' with your file's path
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const json = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync('output.json', JSON.stringify(json, null, 2));
