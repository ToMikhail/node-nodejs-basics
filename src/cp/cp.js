import { spawn } from 'child_process';
import process from 'process';
import { stdout, stdin } from 'node:process';

const spawnChildProcess = async (args) => {
  console.log(args);

  const childProcess = spawn(
    'node',
    ['src/cp/files/script.js', ...args],
  )
  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  })

};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['someArgument1', 'someArgument2'])
