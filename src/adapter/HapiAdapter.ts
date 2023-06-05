import { Request, ResponseToolkit } from "@hapi/hapi";

export default class HapiAdapter {
	static create(fn: any) {
		return async function (request: Request, h: ResponseToolkit) {
            const obj = await fn(request.params, request.query, request.payload)
            return h.response(obj.payload).code(obj.statusCode)
		}
	}
}