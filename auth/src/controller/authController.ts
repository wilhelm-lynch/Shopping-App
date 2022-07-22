import { BadRequestError } from "@density-shopping/common";
import {Request, Response} from "express"
import { StatusCodes } from "http-status-codes"
import moment from "moment"

const register = async(req: Request, res: Response) =>{
    const {email, password} = req.body;
}

const logout = async ( req: Request, res: Response) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: moment().toDate()
    });

    res.status(StatusCodes.OK).json({message: "user logged out! "})
}

export {register, logout}