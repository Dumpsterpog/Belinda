process.on('unhandledRejection', (reason, p) => {
    console.log('ignore that log'.gray);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('ignore that log'.gray);
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('ignore that log'.gray);
  });
  process.on('beforeExit', (code) => {
    console.log('ignore that log'.gray);
  });
  process.on('exit', (code) => {
    console.log('ignore that log'.gray);
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('ignore that log'.gray);
  });