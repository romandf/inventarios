import Stockp from "../models/pembuModel.js";

const pembuCtrl = {};

pembuCtrl.getData = async (req, res) => {
  try {
    const item = await Stockp.find();
    return res.status(200).json(item);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

pembuCtrl.createItem = async (req, res) => {
  try {
    const itemBody = req.body;
    const newItem = new Stockp(itemBody);
    const item = await newItem.save();
    return res.status(200).json({ message: "Item Saved.." });
  } catch (error) {
    return res.status(400).json({ message: message.error });
  }
};

pembuCtrl.getOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Stockp.findById(id);
    return res.status(200).json(item);
  } catch (error) {
    return res.status(400).json({ message: message.error });
  }
};

pembuCtrl.updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const itemBody = req.body;
    const newItem = await Stockp.findByIdAndUpdate(id, itemBody);
    return res.status(200).json({ message: "Item Updated.." });
  } catch (error) {
    return res.status(400).json({ message: message.error });
  }
};
pembuCtrl.deleteItem = async(req, res) => {
  try{
    const id = req.params.id;
    const item = await Stockp.findByIdAndDelete(id);
    return res.status(200).json({message:"Item deleted from database.."})
  }catch (error){
    return res.status(400).json({message: message.error});
  }
  
};
export default pembuCtrl;
