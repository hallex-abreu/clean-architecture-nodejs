import GetUserByIdUseCase from "../../../core/usecases/GetUserByIdUseCase"
import UserRepositoryInMemory from "../../database/UserRepositoryInMemory";
import WinstonLog from "../../logger/WinstonLog";
import Errors from "../utils/Errors";
import GetError from "../utils/GetError";

export default class UserController {
	static async getUserById (params: any, query: any, body: any) {
		const logger = new WinstonLog();
		try{
			const userRepositoryInMemory = new UserRepositoryInMemory()
			const getUserByIdUseCase = new GetUserByIdUseCase(userRepositoryInMemory)
			const { id } = params
			const user = await getUserByIdUseCase.execute(id)
			return {
				statusCode: 200,
				payload: user
			}
		} catch(exception: any){
            logger.error(`Exception: ${exception}`);
            const error = GetError(exception, Errors, logger);
			return {
				statusCode: error.http_status_code,
				payload: {errors: [{message:error.message}]}
			}
        }
	}
}