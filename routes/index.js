var express = require('express');
import {index} from '../controllers/index.controller';

const router = express.Router();

/* GET home page. */
router.get('/', index)

export default router
