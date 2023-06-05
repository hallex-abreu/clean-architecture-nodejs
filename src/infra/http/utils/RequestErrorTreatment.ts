import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export default function requestErrorTreatment(request: Request, response: Response, next: NextFunction) {
    const validation = validationResult.withDefaults({
        formatter: error => {
          return {
            message: error.msg
          };
        },
    });

    const errors = validation(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({errors: errors.array()});
    }

    next();
}