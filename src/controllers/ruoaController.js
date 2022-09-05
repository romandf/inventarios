import Stockr from "../models/ruoaModel.js";
const stockr = Stockr;
const ruoaCtrl = {};

ruoaCtrl.getItem = async (req, res) => {
  try {
    const items = await stockr.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(400).json({ message});
  }
};

ruoaCtrl.createItem = async (req, res) => {
    try{
        const itemBody = req.body;
        const newItem = new stockr(itemBody);
        await newItem.save();
        return res.status(200).json({message: "New Item was created"});
    }catch(error){
        return res.status(400).json({message});
    }
};
ruoaCtrl.getOneItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await stockr.findById(id);
        return res.status(200).json(item);
    }catch(error){
        return res.status(400).json({message:"Item not found.."});
    }
};

ruoaCtrl.updateItem = async (req, res) => { 
  try {
    const id = req.params.id;
    const itemBody = req.body;
      await stockr.findByIdAndUpdate(id, itemBody);
      return res.status(200).json({ message: "Item Updated.." });
  } catch (error) {
      return res.status(400).json({error});
  }
};

ruoaCtrl.deleteItem = async (req, res) => {
  try{
    const id = req.params.id;
    await stockr.findByIdAndDelete(id);
    res.status(200).json({message: "Item Deleted from Database"});
  }catch (error){
    return res.status(400).json({error});
  }
}

export default ruoaCtrl;
