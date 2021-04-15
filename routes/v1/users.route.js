import express from 'express';
import {get, post} from './user.controller';


const router = express.Router()

router.route('/').get(get);
router.route('/').post(post);
export default router;