import Pembu from "../models/pembuModel.js";

const pembuCtrl = {};
import multer from "multer";

const {pathname: uploads} = new URL('../uploads/pembu', import.meta.url)
const storage = multer.diskStorage({
    destination: ( req, file, cb )=> {
        cb( null, uploads) //imagen Cruda
    },
    filename: ( req, file, cb ) =>{
        //const ext = file.originalname.split('.').pop() //extrae la extension
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage});

pembuCtrl.upImage = upload.single('image')

pembuCtrl.getItem = async (req, res) => {
  try {
    const items = await Pembu.find();
    return res.status(200).json(items);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

pembuCtrl.createItem = async (req, res) => {
    try{
        const {name,stockNum,serieNum,trademark,model,status,location,description} = req.body;
        const item = Pembu({
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
          item.setImgUrl(filename)
        }
        const newItem = await item.save();
        return res.status(200).json(newItem);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};
pembuCtrl.getOneItem = async (req, res) => {
    try{
        const id = req.params.id;
        const item = await Pembu.findById(id);
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
    const itemUpdated = await Pembu.findByIdAndUpdate(id,itemBody);
      return res.status(200).json(itemUpdated);
  } catch (error) {
      return res.status(500).json({message: error.message});
  }
};

pembuCtrl.deleteItem = async (req, res) => {
  try{
    const id = req.params.id;
    const item = await Pembu.findByIdAndDelete(id);
    if(!item) return res.sendStatus(404)
    return res.sendStatus(204);
    //res.status(200).json({message: "Item Deleted from Database"});
  }catch (error){
    return res.status(500).json({message: error.message});
  }
}
export default pembuCtrl;