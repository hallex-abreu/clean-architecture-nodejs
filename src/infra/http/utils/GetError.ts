import LoggerInterface from "../../../core/interface/LoggerInterface";

export default function GetError(error_exception: string, errors: any, logger: LoggerInterface){
    const result = errors.runtime.filter((error)=>{
        if (error.code === error_exception){
            return error;
        }
    });
    
    if (result.length === 0){ 
        logger.info(`Error: ${JSON.stringify(errors.internal.message)}`);
        return {
            code: errors.internal.code, 
            http_status_code: errors.internal.http_status_code,
            message: errors.internal.message
        }
    }else{
        logger.error(`Error: ${JSON.stringify(result[0].message)}`);
        return result[0];
    }
}