import express from 'express';
import 'express-async-errors';
import { errorHandler } from './errors/errorHandler';

export const app = express();
app.use(express.json());




app.use(errorHandler)