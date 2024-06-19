/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, Router } from "express";


const appRoutes = Router();


appRoutes.get('/', (Request:Request, res:Response , next:NextFunction) => {
    res.send('Hello World');
})



export default appRoutes;