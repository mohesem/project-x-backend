// set enviroment variables
if (process.env.NODE_ENV === 'dev') require('dotenv').config({ path: './env/.env.dev' });
if (process.env.NODE_ENV === 'prod') require('dotenv').config({ path: './env/.env.prod' });

import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Cors from 'cors';
import debug from 'debug';
require('./DB/connect');

const log = debug('server');
const port = process.env.PORT;

const app = express();

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, () => log(`app listen to port ${port} on ${process.env.NODE_ENV}`));
