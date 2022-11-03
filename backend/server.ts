import * as express from 'express';
import { PORT } from './utils/config';
import projectRoutes from './routes/projectRoutes';
import { errorHandler } from './middleware/errorMiddleware';
import { connectDb } from './database/db';
import * as Colors from 'colors.ts';

Colors.colors('', '');

const app = express();

// Middleware
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.use(errorHandler);

const startServer = async () => {
  await connectDb();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
