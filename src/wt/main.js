import path, { dirname } from "path";
import os from "os";
import { fileURLToPath } from "url";
import { isMainThread, parentPort, Worker, workerData } from "worker_threads";

const workerPath = path.join(dirname(fileURLToPath(import.meta.url)), 'worker.js');
console.log('workerPath: ', workerPath);

const performCalculations = async () => {
  const workers = [];
  const cpus = os.cpus().length

  for (let i = 0; i < cpus; i++) {
    const worker = new Worker(
      workerPath,
      { workerData: i + 10 }
    )
    workers.push(worker);
  }
  const results = await Promise.all(
    workers.map((worker) => new Promise((resolve) => {
      worker.on('message', (value) => resolve({ status: 'resolved', data: value }));
      worker.on('error', () => reject({ status: 'error', data: null }));
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      })
    })),
  );
  console.log(results);
};

await performCalculations();