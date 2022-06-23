export default abstract class CustomAPIError extends Error {
    constructor(message: string);
}
export interface ICustomAPIError {
    message: string;
    statusCode: number;
}
