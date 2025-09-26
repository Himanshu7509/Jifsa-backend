import app from './index.js';
import { dbConnect } from './utils/mongodb.js';
import { PORT } from './config/config.js';

const startServer = async () => {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();