import { Router } from 'express';
import pembuCtrl from '../controllers/pembuController.js';

const router = Router();
const {getData, createItem, getOneItem, updateItem, deleteItem } = pembuCtrl;

router.route('/')
    .get(getData)
    .post(createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem);
export default router;

