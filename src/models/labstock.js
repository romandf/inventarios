import { Schema, model } from 'mongoose';

const labstockSchema = new Schema({
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
    status:{
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
        required:true,
        trim:true
    },
},
    {
        timestamps:true,
        versionKey:false
    }
);

export default model("labstock", labstockSchema);