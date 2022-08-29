import labstock from "../models/labstock";
const datalabmodel = labstock;

const labCtrl = {};

labCtrl.getdata = async (req, res) =>{
    const labdatam = await datalabmodel.find(); 
    res.json(labdatam);
};
labCtrl.createdata = (req, res) => {
    const {name,stockNum,serieNum,trademark,model,location, description } = req.body;
    const newlabdatam = new datalabmodel({
        name: name,
        stockNum: stockNum,
        serieNum: serieNum,
        trademark: trademark,
        model: model,
        location: location,
        description: description 
    });
    newlabdatam.save();
    res.json({message: 'Data lab Saved!!'});
}

module.exports = labCtrl;