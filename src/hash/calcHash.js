import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const srcPath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt') 

const calculateHash = async () => {
  const fileBuffer = fs.readFileSync(srcPath);
  const hash = crypto.createHash('sha256');
  hash.update(fileBuffer);
  const hex = hash.digest('hex');
  console.log(hex);
};

await calculateHash();