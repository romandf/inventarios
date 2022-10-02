import mongoose from 'mongoose';
import { HOST, PORT } from '../config.js'

const pembuSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    stockNum:{
        type:String,
        required:true,
        unique: true,
        trim:true
    },
    serieNum:{
        type:String,
        required:true,
        trim:true
    },
    trademark:{
        type:String,
        required:true,
        trim:true
    },
    model:{
        type:String,
        required:true,
        trim:true
    },
    status:
    {
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    imgUrl:
    {
        type:String,
    }
},
    {
        timestamps:true,
        versionKey:false
    }
);

pembuSchema.methods.setImgUrl = function setImgUrl(filename){
    return this.imgUrl = `${HOST}:${PORT}/public/${filename}`;
}
export default mongoose.model("Pembu", pembuSchema);