import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import ('./database');

 const main = async ()=> {
    await app.listen(app.set('port'));
    console.log('Server on Port:', app.set('port'));
}

main();