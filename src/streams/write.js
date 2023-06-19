import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')

const write = async () => {
  const writableStream = fs.createWriteStream(filePath, 'utf-8');
  writableStream.on('error', (err) => {
    console.log(`error:  ${err.message}`);
  });

  process.stdin.pipe(writableStream);

};

await write();