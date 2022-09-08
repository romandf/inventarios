import multer from "multer";
const upload = multer({ dest: "./uploads/" });

const imageCtrl = {};

imageCtrl.upImage = upload.single("image"), (req, res) => {
    try {
      const image = req.body;
      if (image) {
        return res.status(200).json({ message: "image is uploaded.." });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

export default imageCtrl;