import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import labRoutes from './routes/laboratorio.js';
import pembuRoutes from './routes/pembu.js';
import ruoaRoutes from './routes/ruoa.js';


const app = express();

//midlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/laboratorio',labRoutes);
app.use('/api/pembu', pembuRoutes);
app.use('/api/ruoa', ruoaRoutes);

export default app;