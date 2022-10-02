import Ruoa from "../models/ruoaModel.js";

const ruoaCtrl = {};

ruoaCtrl.getItem = async (req, res) => {
  try {
    const items = await Ruoa.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

ruoaCtrl.createItem = async (req, res) => {
  try{
    const {name,stockNum,serieNum,trademark,model,status,location,description} = req.body;
    const newItem = Ruoa({
      name,
      stockNum,
      serieNum,
      trademark,
      model,
      status,
      location,
      description,
    })
    if(req.file){
      const {filename} = req.file;
      newItem.setImgUrl(filename);
    }
   const NewItem = await newItem.save();
    return res.status(200).json(newItem);
}catch(error){
    return res.status(500).json({message: error.message});
}
};
ruoaCtrl.getOneItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Ruoa.findById(id);
        if(!item) return res.sendStatus(404)
        return res.status(200).json(item);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

ruoaCtrl.updateItem = async (req, res) => { 
  try {
    const id = req.params.id;
    const itemBody = req.body;
      await Ruoa.findByIdAndUpdate(id, itemBody);
      return res.status(200).json({ message: "Item Updated.." });
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
};

ruoaCtrl.deleteItem = async (req, res) => {
  try{
    const id = req.params.id;
    const item = await Ruoa.findByIdAndDelete(id);
    if(!item) return res.sendStatus(404)
    return res.sendStatus(204);
    //res.status(200).json({message: "Item Deleted from Database"});
  }catch (error){
    return res.status(500).json({message: error.message});
  }
}

export default ruoaCtrl;
