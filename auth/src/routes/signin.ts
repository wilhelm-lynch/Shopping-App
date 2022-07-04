import express, {Request, Response} from "express";
import signIn from "../schema-validation/signin"
import {register} from "../controller"
import {SchemaValidator} from "@density-shopping/common"

const router = express.Router();
const validator = new SchemaValidator(signIn);

router.post("/signin", validator.validateRequest,  register);

export {router as signinRouter}