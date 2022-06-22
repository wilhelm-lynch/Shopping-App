import {IRouter} from "express";
import {currentUserRouter} from "./current-user"
import {signinRouter} from "./signin"
import {signoutRouter} from "./signout"
import {signupRouter} from "./signup"

const routes: Array<IRouter>  = [currentUserRouter, signinRouter, signoutRouter, signupRouter]
export {routes}