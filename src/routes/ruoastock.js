import { Router } from 'express';
import  ruoaCtrl from '../controllers/rstock.controller';

const router = Router();
const { getdata, createdata } = ruoaCtrl;

 router.route('/')
    .get(getdata)
    .post(createdata)
    .put();
    
 router.route('/:id')
        .get()
        .put()
        .delete();
module.exports = router;