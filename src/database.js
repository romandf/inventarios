import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI
            ? process.env.MONGODB_URI
            :'mongodb://localhost/stock';

mongoose.connect(URI, {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', ()=> console.log('DB Connected'));