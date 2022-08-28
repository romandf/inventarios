import ruoastock from '../models/ruoastock';

const rdatamodel = ruoastock;
const ruoaCtrl = {};

ruoaCtrl.getdata = async (req, res)=>{
    const rdatam = await rdatamodel.find();
    res.json(rdatam);
} 
ruoaCtrl.createdata = (req, res)=> {
    const {name,stockNum,serieNum,trademark,model,location, description } = req.body;
    const newrdatam = new rdatamodel({
        name,
        stockNum,
        serieNum,
        trademark,
        model,
        location,
        description
    })
    newrdatam.save();
    res.json({message:"Stock RUOA Saved!!"});
    
};

module.exports = ruoaCtrl;