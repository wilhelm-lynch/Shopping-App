import express from "express";
import {register} from "../controller"

const router = express.Router();

// Add validation controller
router.post("/signup", register )

export {router as signupRouter}