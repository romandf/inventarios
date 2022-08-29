import { Schema, model } from 'mongoose';

const ruoastockSchema = new Schema({
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
    status:
    {
        type:Boolean,
        required:true
    },
    model:{
        type:String,
        required:true,
        trim:true
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
},
    {
        timestamps:true,
        versionKey:false
    }
);

export default model("ruoastock", ruoastockSchema);