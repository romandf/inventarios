import { Router } from 'express';
import ruoaCtrl from "../controllers/ruoaController.js";
import imageCtrl from '../controllers/imageController.js';

const router = Router();
const {getItem, createItem, getOneItem, updateItem, deleteItem } =ruoaCtrl;
const {upImage, uploadFile} = imageCtrl;

router.route('/')
    .get(getItem)
    .post(upImage,createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem)
    
export default router;