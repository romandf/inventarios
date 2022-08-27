import { Router } from 'express';
import pembuCtrl from '../controllers/pstockcontroller';

const router = Router();
const { getdata, createdata } = pembuCtrl;

 router.route('/')
    .get(getdata)
    .post(createdata);
 router.route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;