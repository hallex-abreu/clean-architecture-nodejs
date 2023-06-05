const Errors = {
    runtime: [
        {
            code: 'USER_DOES_NOT_EXIST',
            http_status_code: 422,
            message: 'User does not exist.'
        },
    ],
    internal: {
        code: 'INTERNAL_ERROR', 
        http_status_code: 500,
        message: 'A internal error has ocurred.'
    }
};

export default Errors;