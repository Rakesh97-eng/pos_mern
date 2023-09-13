import express from "express";
import { getItemcontroller, postItemcontroller } from "../controllers/itemcontroller.js";


export const itemRoutes = express.Router();

itemRoutes.get('/getitems',getItemcontroller)

itemRoutes.post('/postitems',postItemcontroller)
