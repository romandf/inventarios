import { Router } from 'express';
import pembuCtrl from '../controllers/pembuController.js';

const router = Router();
const {getItem, createItem, getOneItem, updateItem, deleteItem } = pembuCtrl;

router.route('/')
    .get(getItem)
    .post(createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem);
export default router;

