import path, { dirname } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import('./files/c.js');
import fs from 'fs';
import { fileURLToPath } from 'url';
import aFile from './files/a.json' assert { type: "json" };
import bFile from './files/b.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = aFile;
} else {
    unknownObject = bFile;
}

const oldPath = path.join(__dirname, 'cjsToEsm.cjs');
const newPath = path.join(__dirname, 'esm.mjs');

const refactorToECMAScript = () => {
    if (fs.existsSync(oldPath)) {
        fs.rename(oldPath, newPath, (err) => {
            if (err) throw err;
        })
    }
}

refactorToECMAScript();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

