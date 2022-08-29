import pembustock from "../models/pembustock";
const pdatamodel = pembustock;

const pembuCtrl = {};

pembuCtrl.getdata = async (req, res)=>{
    const pdatam = await pdatamodel.find();     
    res.json(pdatam);
}; 
pembuCtrl.createdata = (req, res) => {
    const {name,stockNum,serieNum,trademark,model,location, description } = req.body;
    const newpdatam = new pdatamodel({
        name,
        stockNum,
        serieNum,
        trademark,
        model,
        location,
        description
    });
    newpdatam.save(); 
    res.json({message:'Data Laboratory created'});
}
module.exports = pembuCtrl;