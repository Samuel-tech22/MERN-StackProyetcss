import express from 'express';
import { test } from '../controllere/user.controller.js';

const router = express.Router();

router.get('/test', test );

export default router;