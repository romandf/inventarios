import Labo from "../models/laboModel.js";

const laboCtrl = {};
laboCtrl.getItem = async (req, res) => {
  try {
    const items = await Labo.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

laboCtrl.createItem = async (req, res) => {
    try{
        const {name,stockNum,serieNum,trademark,model,status,location,description} = req.body;
        const newItem = Labo({
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
laboCtrl.getOneItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Labo.findById(id);
        if(!item) return res.sendStatus(404)
        return res.status(200).json(item);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

laboCtrl.updateItem = async (req, res) => { 
  try {
    const id = req.params.id;
    const itemBody = req.body;
      await Labo.findByIdAndUpdate(id, itemBody);
      return res.status(200).json({ message: "Item Updated.." });
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
};

laboCtrl.deleteItem = async (req, res) => {
  try{
    const id = req.params.id;
    const item = await Labo.findByIdAndDelete(id);
    if(!item) return res.sendStatus(404)
    return res.sendStatus(204);
    //res.status(200).json({message: "Item Deleted from Itembase"});
  }catch (error){
    return res.status(500).json({message: error.message});
  }
}
export default laboCtrl;
