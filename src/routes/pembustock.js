import { Router } from 'express';
import pembuCtrl from '../controllers/pstockcontroller';

const router = Router();
const { getdata, createdata, getOneData, delOneData, upOneData } = pembuCtrl;

 router.route('/')
    .get(getdata)
    .post(createdata);

 router.route('/:id')
    .get(getOneData)
    .put(upOneData)
    .delete(delOneData);

module.exports = router;