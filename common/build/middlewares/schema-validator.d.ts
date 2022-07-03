/// <reference types="qs" />
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";
interface ISchema {
    object: ObjectSchema;
}
export default class SchemaValidator {
    private _useJoiError;
    private _supportedMethod;
    private _validationOptions;
    private messages;
    private schema;
    constructor(Schema: ISchema, useJoiError?: boolean);
    get validateRequest(): (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: NextFunction) => void | Response<any, Record<string, any>>;
    private Validate;
    private i18nlNL;
    private i18enEng;
}
export {};
