import path from "path";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcPath = path.join(__dirname, 'files', 'fileToRead.txt');
console.log('srcPath: ', srcPath);

const read = async () => {
  if (!fs.existsSync(srcPath)) throw new Error('FS operation failed')
  fs.readFile(srcPath, 'utf8', (err, data) => {
    if(err) console.error(err);
    console.log('data: ', data);
  })
};

await read();