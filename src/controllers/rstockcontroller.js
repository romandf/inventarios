import ruoastock from "../models/ruoastock";

const rdatamodel = ruoastock;
const ruoaCtrl = {};

ruoaCtrl.getdata = async (req, res, next) => {
  const rdatam = await rdatamodel.find();
  res.json(rdatam);
};
ruoaCtrl.createdata = async (req, res) => {
  const newrdatam = req.body;
  const rdatam = new rdatamodel(newrdatam);
  await rdatam.save();
  res.json({ message: "Stock RUOA Saved!!" });
};

ruoaCtrl.getOneData = async (req, res) => {
  const id = req.params.id;
  const oneData = await rdatamodel.findById(id);
  res.json(oneData);
};

ruoaCtrl.updata = async (req, res) => {
    const {id} = req.params;
    const newrdatam = req.body;
    const rdatam = await rdatamodel.findByIdAndUpdate(id, newrdatam);
    res.status(200).json({message:"Stock Update!!"});
}

ruoaCtrl.deldata = async (req, res) =>{
    const id = req.params.id;
    await rdatamodel.findByIdAndDelete(id);
    res.json({message: "Stock removed!!"});
}
module.exports = ruoaCtrl;
