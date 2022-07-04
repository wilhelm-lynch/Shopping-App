import Joi, {StringSchema, string} from "joi"

const email: StringSchema = Joi.string()
.regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
.required()
.min(5)
.max(244)
.email()

const wachtwoord: StringSchema = Joi.string()
.regex(/^[A-Za-z]+$/)
.required()
.min(5)
.max(255);

const userSchema: Joi.ObjectSchema<string> = Joi.object({email, wachtwoord});
const signIn = {object: userSchema}

export default signIn   