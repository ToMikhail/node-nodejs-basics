import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongPath = path.join(__dirname, 'files', 'wrongFilename.txt');
const properPath = path.join(__dirname, 'files', 'properFilename.md');
console.log('properPath: ', properPath);

const rename = async () => {
  if (!fs.existsSync(wrongPath) || fs.existsSync(properPath)) throw new Error('FS operation failed');
  fs.rename(wrongPath, properPath, (err) => {
    console.error(err);
  })
};

await rename();