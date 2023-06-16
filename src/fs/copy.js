import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
path

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sourceDir = path.join(__dirname, 'files');
const destinationDir = path.join(__dirname, 'files_copy')

const copy = async () => {

  if (fs.existsSync(destinationDir)) {
    throw new Error('FS operation failed')
  }
  fs.mkdir(destinationDir, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
    fs.cp(sourceDir, destinationDir, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('Directory created successfully!');
    })
  });
};

await copy();
