import Stockp from "../models/pembuModel.js";
const stock = Stockp;

const pembuCtrl = {};

pembuCtrl.getItem = async (req, res) => {
  try {
    const items = await stock.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

pembuCtrl.createItem = async (req, res) => {
    try{
        const itemBody = req.body;
        const newItem = new stock(itemBody);
        await newItem.save();
        return res.status(200).json({message: "New Item was created"});
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};
pembuCtrl.getOneItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await stock.findById(id);
        if(!item) return res.sendStatus(404)
        return res.status(200).json(item);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

pembuCtrl.updateItem = async (req, res) => { 
  try {
    const id = req.params.id;
    const itemBody = req.body;
      await stock.findByIdAndUpdate(id, itemBody);
      return res.status(200).json({ message: "Item Updated.." });
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
};

pembuCtrl.deleteItem = async (req, res) => {
  try{
    const id = req.params.id;
    const item = await stock.findByIdAndDelete(id);
    if(!item) return res.sendStatus(404)
    return res.sendStatus(204);
    //res.status(200).json({message: "Item Deleted from Database"});
  }catch (error){
    return res.status(500).json({message: error.message});
  }
}
export default pembuCtrl;