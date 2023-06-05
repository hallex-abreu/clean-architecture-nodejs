import { Request, Response } from "express"

export default class ExpressAdapter{
    static create(fn: any){
        return async function(request: Request, response: Response) {
            const obj = await fn(request.params, request.body, request.body)
            response.status(obj.statusCode).json(obj.payload)
        }
    }
}