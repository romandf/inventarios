import { Router } from 'express';
import imageCtrl from '../controllers/imageController.js';

const router = Router();

const {upImage, uploadFile} = imageCtrl;

router.route('/')
    .post(upImage, uploadFile)

export default router;