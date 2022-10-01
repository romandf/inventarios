import {connectDB} from './database.js';
import {PORT} from './config.js';
import app from './app.js'
//setting
connectDB();
app.listen(PORT)
console.log('Server running on Port:',PORT);