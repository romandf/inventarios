import multer from "multer";
import sharp from 'sharp';

const imageCtrl = {};

const storage = multer.diskStorage({
    destination: ( req, file, cb )=> {
        cb( null, './uploads/' ) //imagen Cruda
    },
    filename: ( req, file, cb ) =>{
        const ext = file.originalname.split('.').pop() //extrae la extension
        cb(null, `${Date.now()}.${ext}`)
    }
})
const upload = multer({storage});

const helperImg = (filePath, fileName, size = 300) => {
    return sharp(filePath).resize(size).toFile(`./optimize/${fileName}`)
}

imageCtrl.upImage = upload.single("image"), async (req, res) => {
    if (req.file){
        console.log("Uploading file...");
        var image = req.file.filename;
    }
    else {
        console.log("No file uploaded");
        var image = "noimage.jpg";
    }

    let post = {
        title: req.body.title,
        section: req.body.section,
        image: image,
    }

    var postRef = fbRef.child("posts");

    postRef.push().set(post);

    req.flash("success_msg", "Post Created")
    res.redirect("/"+ req.body.section.toLowerCase());

};

export default imageCtrl;