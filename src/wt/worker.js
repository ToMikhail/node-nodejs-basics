import { isMainThread, parentPort, Worker, workerData } from "worker_threads";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  if (isMainThread) {
    throw new Error('This is The main Thread')
  }

  const res = nthFibonacci(workerData);
  console.log('res: ', res);
  parentPort.postMessage(res);
};

sendResult();