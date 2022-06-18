import ExpressConfig from "./express";

export default class Application{
    server: unknown
    express: ExpressConfig

    constructor(){
        this.express = new ExpressConfig();
        const port = 3000;
        this.express.app.listen(port, () => console.log(`Server listening @ http://localhost:${port}`))
    }
}