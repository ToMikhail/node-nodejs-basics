import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {

  const readableStream = fs.createReadStream(filePath, 'utf8');
  readableStream.on('error', (err) => {
    console.log(`error:  ${err.message}`);
  });
  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk, (err) => {
      console.log(`Error: ${err.message}`);
    });

  })  
};

await read();