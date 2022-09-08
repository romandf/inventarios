import { Router } from 'express';

const router = Router();

import imageCtrl from '../controllers/imageController.js';
const {upImage} = imageCtrl;

router.route('/')
    .post(upImage)

export default router;