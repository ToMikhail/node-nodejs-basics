import fs, { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip, createUnzip } from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToDecompress.txt');
const archivePath = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
  const handleStream = fs.createReadStream(archivePath);

  handleStream
    .pipe(createUnzip())
    .pipe(createWriteStream(filePath))
    .on('finish', () => {
      console.log(`Decompression process done: ${filePath}`);
    })
};

await decompress();