"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const http_status_codes_1 = require("http-status-codes");
class SchemaValidator {
    constructor(Schema, useJoiError = true) {
        this.Validate = () => (req, res, next) => {
            this.messages = req.headers["accept-language"] === "eng-Eng" ? this.i18enEng() : this.i18nlNL();
            const _method = req.method.toLowerCase();
            if (lodash_1.default.includes(this._supportedMethod, _method) && this.schema) {
                const { object } = this.schema;
                const { error, value } = object.messages(this.messages).validate(req.body, this._validationOptions);
                if (error) {
                    const _joiError = error.details.map(({ message, path }) => ({
                        status: "failed",
                        message: message.replace(/['"]/g, ""),
                        path: path[0],
                    }));
                    const _CustomError = {
                        status: "failed",
                        error: "Invalid request data. Please review request and try again."
                    };
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(this._useJoiError ? { data: _joiError } : { data: _CustomError });
                }
                else {
                    req.body = value;
                    return next();
                }
            }
            return next();
        };
        this.i18nlNL = () => {
            const messages = {
                "string.alphanum": "{{#label}} must only contain alpha-numeric characters",
                "string.base": "{{#label}} must be a string",
                "string.base64": "{{#label}} must be a valid base64 string",
                "string.creditCard": "{{#label}} must be a credit card",
                "string.dataUri": "{{#label}} must be a valid dataUri string",
                "string.domain": "{{#label}} must contain a valid domain name",
                "string.email": "{{#label}} type een geldige email in",
                "string.empty": "{{#label}} mag niet leeg zijn'",
                "string.guid": "{{#label}} must be a valid GUID",
                "string.hex": "{{#label}} must only contain hexadecimal characters",
                "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned",
                "string.hostname": "{{#label}} must be a valid hostname",
                "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
                "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
                "string.isoDate": "{{#label}} must be in iso format",
                "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration",
                "string.length": "{{#label}} moet minstens {{#limit}} lang zijn",
                "string.lowercase": "{{#label}} must only contain lowercase characters",
                "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long",
                "string.min": "{{#label}} moet minstens {{#limit}} characters lang zijn",
                "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form",
                "string.token": "{{#label}} must only contain alpha-numeric and underscore characters",
                "string.pattern.base": "{{#label}} komt niet overeen met het verreiste patroon: {{#regex}}",
                "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
                "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}",
                "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern",
                "string.trim": "{{#label}} must not have leading or trailing whitespace",
                "string.uri": "{{#label}} must be a valid uri",
                "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern",
                "string.uriRelativeOnly": "{{#label}} must be a valid relative uri",
                "string.uppercase": "{{#label}} must only contain uppercase characters",
                //Keys
                "object.and": "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}",
                "object.assert": '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
                "object.base": "{{#label}} must be of type {{#type}}",
                "object.instance": "{{#label}} must be an instance of {{:#type}}",
                "object.length": '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.max": '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.min": '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.missing": "{{#label}} must contain at least one of {{#peersWithLabels}}",
                "object.nand": "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}",
                "object.oxor": "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}",
                "object.pattern.match": "{{#label}} keys failed to match pattern requirements",
                "object.refType": "{{#label}} must be a Joi reference",
                "object.regex": "{{#label}} must be a RegExp object",
                "object.rename.multiple": "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}",
                "object.rename.override": "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists",
                "object.schema": "{{#label}} must be a Joi schema of {{#type}} type",
                "object.unknown": "{{#label}} is not allowed",
                "object.with": "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}",
                "object.without": "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}",
                "object.xor": "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}",
                //any
                "any.custom": "{{#label}} failed custom validation because {{#error.message}}",
                "any.default": "{{#label}} threw an error when running default method",
                "any.failover": "{{#label}} threw an error when running failover method",
                "any.invalid": "{{#label}} contains an invalid value",
                "any.only": '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',
                "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}",
                "any.required": "{{#label}} is vereist",
                "any.unknown": "{{#label}} is niet toegestaan",
            };
            return messages;
        };
        this.i18enEng = () => {
            const messages = {
                "string.alphanum": "{{#label}} must only contain alpha-numeric characters",
                "string.base": "{{#label}} must be a string",
                "string.base64": "{{#label}} must be a valid base64 string",
                "string.creditCard": "{{#label}} must be a credit card",
                "string.dataUri": "{{#label}} must be a valid dataUri string",
                "string.domain": "{{#label}} must contain a valid domain name",
                "string.email": "{{#label}} must be a valid email",
                "string.empty": "{{#label}} is not allowed to be empty",
                "string.guid": "{{#label}} must be a valid GUID",
                "string.hex": "{{#label}} must only contain hexadecimal characters",
                "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned",
                "string.hostname": "{{#label}} must be a valid hostname",
                "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
                "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
                "string.isoDate": "{{#label}} must be in iso format",
                "string.isoDuration": "{{#label}} must be a valid ISO 8601 duration",
                "string.length": "{{#label}} length must be {{#limit}} characters long",
                "string.lowercase": "{{#label}} must only contain lowercase characters",
                "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long",
                "string.min": "{{#label}} length must be at least {{#limit}} characters long",
                "string.normalize": "{{#label}} must be unicode normalized in the {{#form}} form",
                "string.token": "{{#label}} must only contain alpha-numeric and underscore characters",
                "string.pattern.base": "{{#label}} fails to match the required pattern: {{#regex}}",
                "string.pattern.name": "{{#label}} with value {:[.]} fails to match the {{#name}} pattern",
                "string.pattern.invert.base": "{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}",
                "string.pattern.invert.name": "{{#label}} with value {:[.]} matches the inverted {{#name}} pattern",
                "string.trim": "{{#label}} must not have leading or trailing whitespace",
                "string.uri": "{{#label}} must be a valid uri",
                "string.uriCustomScheme": "{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern",
                "string.uriRelativeOnly": "{{#label}} must be a valid relative uri",
                "string.uppercase": "{{#label}} must only contain uppercase characters",
                //Keys
                "object.and": "{{#label}} contains {{#presentWithLabels}} without its required peers {{#missingWithLabels}}",
                "object.assert": '{{#label}} is invalid because {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
                "object.base": "{{#label}} must be of type {{#type}}",
                "object.instance": "{{#label}} must be an instance of {{:#type}}",
                "object.length": '{{#label}} must have {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.max": '{{#label}} must have less than or equal to {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.min": '{{#label}} must have at least {{#limit}} key{if(#limit == 1, "", "s")}',
                "object.missing": "{{#label}} must contain at least one of {{#peersWithLabels}}",
                "object.nand": "{{:#mainWithLabel}} must not exist simultaneously with {{#peersWithLabels}}",
                "object.oxor": "{{#label}} contains a conflict between optional exclusive peers {{#peersWithLabels}}",
                "object.pattern.match": "{{#label}} keys failed to match pattern requirements",
                "object.refType": "{{#label}} must be a Joi reference",
                "object.regex": "{{#label}} must be a RegExp object",
                "object.rename.multiple": "{{#label}} cannot rename {{:#from}} because multiple renames are disabled and another key was already renamed to {{:#to}}",
                "object.rename.override": "{{#label}} cannot rename {{:#from}} because override is disabled and target {{:#to}} exists",
                "object.schema": "{{#label}} must be a Joi schema of {{#type}} type",
                "object.unknown": "{{#label}} is niet toegestaan",
                "object.with": "{{:#mainWithLabel}} missing required peer {{:#peerWithLabel}}",
                "object.without": "{{:#mainWithLabel}} conflict with forbidden peer {{:#peerWithLabel}}",
                "object.xor": "{{#label}} contains a conflict between exclusive peers {{#peersWithLabels}}",
                //any
                "any.custom": "{{#label}} failed custom validation because {{#error.message}}",
                "any.default": "{{#label}} threw an error when running default method",
                "any.failover": "{{#label}} threw an error when running failover method",
                "any.invalid": "{{#label}} contains an invalid value",
                "any.only": '{{#label}} must be {if(#valids.length == 1, "", "one of ")}{{#valids}}',
                "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}",
                "any.required": "{{#label}} is required",
                "any.unknown": "{{#label}} is not allowed",
            };
            return messages;
        };
        this._useJoiError = lodash_1.default.isBoolean(useJoiError) && useJoiError;
        this._supportedMethod = ["post", "put", "patch"];
        this._validationOptions = { abortEarly: false, allowUnknown: true, stripUnknown: true };
        this.schema = Schema;
    }
    get validateRequest() {
        return this.Validate();
    }
}
exports.default = SchemaValidator;
