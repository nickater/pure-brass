import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import { InstrumentRouter } from './routes/router-exports';

createConnection()
  .then(async () => {
    // create express app
    const app = express();

    app.use('/instruments', InstrumentRouter);

    app.listen(3000, () =>
      console.log('Express server has started on port 3000')
    );
  })
  .catch((error) => console.log(error));
