import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcPath = path.join(__dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  if(!fs.existsSync(srcPath)) {
    throw new Error('FS operation failed');
  }
  fs.rm(srcPath, (err) => {
    if(err) console.error(err)
  })
};

await remove();