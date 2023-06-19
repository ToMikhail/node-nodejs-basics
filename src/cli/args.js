const parseArgs = () => {
  let output = '';
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if(arg.includes('--')) {
      output += `${arg.replace(/-/g, '')} is `;
    }
    else output += `${arg}, `
  }
  console.log('args: ',output);
};

parseArgs();