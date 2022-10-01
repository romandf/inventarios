import { Router } from 'express';
import laboCtrl from '../controllers/laboController.js';
import imageCtrl from '../controllers/imageController.js';

const router = Router();
const { getItem, createItem, getOneItem, updateItem, deleteItem } = laboCtrl;
const {upImage, uploadFile} = imageCtrl;

router.route('/')
    .get(getItem)
    .post(upImage,createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem)
export default router;