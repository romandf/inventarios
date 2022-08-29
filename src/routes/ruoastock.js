import { Router } from 'express';
import  ruoaCtrl from '../controllers/rstockcontroller';

const router = Router();
const { getdata, createdata, getOneData,updata, deldata } = ruoaCtrl;

 router.route('/')
    .get(getdata)
    .post(createdata)
    
 router.route('/:id')
        .get(getOneData)
        .put(updata)
        .delete(deldata);

module.exports = router;