/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import notFound from './middlewares/nof-found';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { postRoutes } from './app/Modules/Post/post.routes';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    // origin: 'http://localhost:5173',
    origin: 'https://taupe-rolypoly-c5f5eb.netlify.app/',
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));

// all routes are control in here
app.use('/cards', postRoutes);

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: 'Welcome To The Server',
  });
});

// API not found middleware
app.use(notFound);

// global error handler
app.use(globalErrorHandler);

export default app;
