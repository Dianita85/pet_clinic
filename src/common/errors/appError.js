

export class AppError extends Error {

    constructor(message,statusCode,) { // se ejecuta cuando se instancia una clase new

        super(message);// instancias msj

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'error' : 'fail';
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor) //captura de errores con el capture...

    }
}


