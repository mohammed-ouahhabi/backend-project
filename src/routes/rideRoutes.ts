import express from "express";
import{ getRides } from '../controllers/rideController';


const router = express.Router();

router.get('/rides', getRides);

export default router;

