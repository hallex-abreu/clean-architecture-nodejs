import {createLogger, format, transports} from 'winston';
import LoggerInterface from '../../core/interface/LoggerInterface';
export default class WinstonLog implements LoggerInterface {
    logs = createLogger({
        transports:[
            new transports.Console({
                level:'info',
                format: format.combine(format.timestamp(), format.simple())
            })
        ]
    });

    info(message: string): void {
       this.logs.log('info', message);
    }

    debug(message: string): void {
        this.logs.log('debug', message);
    }

    error(message: string): void {
        this.logs.log('error', message);
    }
}