import { Router } from 'express';
import pembuCtrl from '../controllers/pembuController.js';
import imageCtrl from '../controllers/imageController.js';


const router = Router();
const {getItem, createItem, getOneItem, updateItem, deleteItem } = pembuCtrl;
const {upImage, uploadFile} = imageCtrl;


router.route('/')
    .get(getItem)
    .post(upImage, createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem);
export default router;

