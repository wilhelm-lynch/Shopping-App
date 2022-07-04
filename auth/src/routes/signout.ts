import express from "express";
import {logout} from "../controller"

const router = express.Router();

router.post("/signout", logout)

export {router as signoutRouter}