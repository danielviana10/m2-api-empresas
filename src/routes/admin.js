import { Router } from "express";
import AdminController from "../controllers/adminController.js";


const router = Router();

router.get("/out_of_work", AdminController.getOutOfWork)

export default router