import multer from "multer";
import sharp from 'sharp';

const pathImage="/home/delibes/javaScript-prog/stock-server/backend/src/optimize/"
const imageCtrl = {};
const {pathname: uploads} = new URL('../uploads', import.meta.url)
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

const helperImg = async (filePath, fileName, size=300) => {
    try{
        await sharp(filePath)
        .resize(size)
        .toFile(pathImage+fileName)
    }catch (error){
        console.log(error);
    }
}

imageCtrl.upImage = upload.single('image')

imageCtrl.uploadFile = (req, res) => {
   console.log(req.file);
     helperImg(req.file.path, `resize-${req.file.filename}`,100)

    res.send({data:"imagen Cargada"});
}
export default imageCtrl;