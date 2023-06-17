import { fileURLToPath } from 'url';
import fs from "fs";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcPath = path.join(__dirname, 'files')

const list = async () => {
  if(!fs.existsSync(srcPath)) throw new Error('FS operation failed')
  fs.readdir(srcPath, (err, files) => {
    if(err) {
      console.error(err);
    }
    console.log('files', files);
  })
};

await list();