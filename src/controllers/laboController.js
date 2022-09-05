import Stockl from "../models/laboModel.js";

const stock = Stockl;

const laboCtrl = {};

laboCtrl.getData = async (req, res) => {
  try {
    const data = await stock.find();
    res.json(data);
  } catch (error) {
    console.error(error);
  }
};
laboCtrl.createData = async (req, res) => {
  try {
    const dataBody = req.body;
    const newdata = new stock(dataBody);
    await newdata.save();

    return res.status(200).json({ message: "Successfully added" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

laboCtrl.getOneData = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await stock.findById(id);
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

laboCtrl.updateData = async (req, res) => {
  const id = req.params.id;
  const dataBody = req.body;
  const data = await stock.findByIdAndUpdate(id, dataBody);
  console.log(data);  
  return res.json({ message: "Item Data Updated " });
};

laboCtrl.deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    await stock.findByIdAndDelete(id);
    return res.status(200).json({ message: "Item deleted from Database.." });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default laboCtrl;
