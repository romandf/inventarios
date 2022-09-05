import { Router } from 'express';
import ruoaCtrl from "../controllers/ruoaController.js";

const router = Router();
const {getItem, createItem, getOneItem, updateItem, deleteItem } =ruoaCtrl;

router.route('/')
    .get(getItem)
    .post(createItem)

router.route('/:id')
    .get(getOneItem)
    .put(updateItem)
    .delete(deleteItem)
    
export default router;