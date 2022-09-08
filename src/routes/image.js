import { Router } from 'express';
import imageCtrl from '../controllers/imageController.js';

const router = Router();

const {upImage} = imageCtrl;

router.route('/')
    .post(upImage)

export default router;