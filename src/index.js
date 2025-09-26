import express from 'express';
import cors from "cors"
import dbConnect from './utils/mongodb.js';
import { PORT } from './config/config.js';
import formRouter from './routes/form.route.js';
import complainFormRouter from './routes/complainform.route.js';

const app = express()
app.use(cors());
app.use(express.json());

app.use('/form',formRouter)
app.use('/complaint',complainFormRouter)


app.listen(PORT, async () => {
    console.log(` API is running on http://localhost:${PORT}`);
   await dbConnect()
});

export default app;