import express from 'express';
import controller from '../controllers/cards';

const router = express.Router();

router.get('/get/cards', controller.getCards);

export = router;