import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

//setthings

    app.set('port', process.env.PORT || 4000);
     
//middlewares

app.use(cors());
app.use(express.json());

//routes

app.use('/api/rstock', require('./routes/ruoastock'));
app.use('/api/pstock', require('./routes/pembustock'));
app.use('/api/lstock', require('./routes/labstock'));


export default app;

