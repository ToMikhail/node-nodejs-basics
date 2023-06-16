// const fs = require('fs');
// var path = require("path");
import fs from "fs";
import { fileURLToPath } from 'url';
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const directory = path.join(__dirname, 'files', 'fresh.txt')

const create = async () => {
  try {
    if (fs.existsSync(directory)) {
      throw new Error('FS operation failed');
    }
    fs.writeFile(directory, 'I am fresh and young', function (err) {
      if (err) console.error(err);
      console.log('File is saved');
    })
  } catch (error) {
    console.error(error);
  }
};

await create();