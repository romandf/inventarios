import { Router } from 'express';
import laboCtrl from '../controllers/laboController.js';

const router = Router();
const { getData, createData, getOneData, updateData, deleteData  } = laboCtrl;

router.route('/')
    .get(getData)
    .post(createData)

router.route('/:id')
    .get(getOneData)
    .put(updateData)
    .delete(deleteData)    

export default router;