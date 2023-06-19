import fs, { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const handleStream = fs.createReadStream(filePath);

  handleStream
    .pipe(createGzip())
    .pipe(createWriteStream(`${archivePath}`))
    .on('finish', () => {
      console.log(`Compression process done: ${archivePath}`);
    })
};

await compress();