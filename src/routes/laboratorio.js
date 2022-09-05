import { Router } from 'express';
import laboCtrl from '../controllers/laboController.js';

const router = Router();
const { getItem, createItem, getOneItem, updateItem, deleteItem  } = laboCtrl;

router.route('/')
    .get(getItem)
    .post(createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem)    

export default router;