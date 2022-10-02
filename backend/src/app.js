import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import labRoutes from "./routes/laboratorio.js";
import pembuRoutes from "./routes/pembu.js";
import ruoaRoutes from "./routes/ruoa.js";
import imageRoutes from "./routes/image.js";

//varibles
const app = express();
const {pathname: uploads} = new URL('./uploads', import.meta.url)
console.log(uploads)
//midlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/public', express.static(uploads));

//Routes
app.use("/api/laboratorio", labRoutes);
app.use("/api/pembu", pembuRoutes);
app.use("/api/ruoa", ruoaRoutes);
app.use("/api/upload", imageRoutes);

export default app;