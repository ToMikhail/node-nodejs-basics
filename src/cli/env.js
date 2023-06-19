

const parseEnv = () => {
  let output = '';
  for (const key in process.env) {
    if (Object.hasOwnProperty.call(process.env, key)) {
      if(key.includes('RSS')) {
        const value = process.env[key];
        output += `${key}=${value}; `
      }
      
    }
  }
  console.log('output: ', output);
};

parseEnv();