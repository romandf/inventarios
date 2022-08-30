import pembustock from "../models/pembustock";
const pdatamodel = pembustock;

const pembuCtrl = {};

pembuCtrl.getdata = async (req, res)=>{
    const pdata = await pdatamodel.find();     
    res.json(pdata);
}; 
pembuCtrl.createdata = (req, res) => {
    const {name,stockNum,serieNum,trademark,model,location, description } = req.body;
    const newpdata = new pdatamodel({
        name,
        stockNum,
        serieNum,
        trademark,
        model,
        location,
        description
    });
    newpdata.save(); 
    res.json({message:'Data Laboratory created'});
};

pembuCtrl.getOneData = async ( req, res )=> {
    const id = req.params.id;
    const oneData = await pdatamodel.findById(id);
    res.json(oneData);

}

pembuCtrl.delOneData = async ( req, res ) => {
    const id = req.params.id;
    await pdatamodel.findByIdAndDelete(id);
    res.json({message:"Device deleted"});
};

pembuCtrl.upOneData = async (req, res) => {
    const {id} = req.params;
    const datatoupdate = req.body;
    await pdatamodel.findByIdAndUpdate(id, datatoupdate);
    res.send({message:"Data Updated!!"});

}


module.exports = pembuCtrl;