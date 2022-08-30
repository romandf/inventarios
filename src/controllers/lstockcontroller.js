import labstock from "../models/labstock";
const datalabmodel = labstock;

const labCtrl = {};

labCtrl.getdata = async (req, res) =>{
    const labdatam = await datalabmodel.find(); 
    res.json(labdatam);
};
labCtrl.createdata = async (req, res) => {
    const newdatalab = req.body;
    const datalab = new datalabmodel(newdatalab);
    await datalab.save();
    res.json({message: 'Data lab Saved!!'});
};

labCtrl.getOneData = async (req, res) => {
    const id = req.params.id;
    const oneData = await datalabmodel.findById(id);
    res.json(oneData);
}; 

labCtrl.updateData = async ( req, res ) => {
    const id = req.params.id;
    const labdata = req.body;
    await datalabmodel.findByIdAndUpdate(id, labdata);
    res.json({message:"Data lab Update"});
};

labCtrl.deleteData = async(req, res) => {
    const id = req.params.id;
    await datalabmodel.findByIdAndDelete(id);
    res.json({mesage:"Data Lab Removed!!"})
}
module.exports = labCtrl;