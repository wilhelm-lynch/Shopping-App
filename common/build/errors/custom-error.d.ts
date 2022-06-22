export default class CustomAPIError extends Error {
    message: string;
    constructor(message: string);
}
