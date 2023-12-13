import { envs } from "../../config/enviroments/enviroments";


const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        err
    });
}

const sendErrorProd = (err, res) => {
    //codigo
}



export const globalErrorHandler = (err,req, res, next) => {

    err.statusCode = err.statusCode // 500  /*errores 400 si no errores 560 */
    
    err.status = err.status // 'fail';    /*si viene null devuelve fail */ 
    
    if(envs.NODE_ENV === 'development'){
        sendErrorDev(err, res)
        
    }

    
    if(envs.NODE_ENV === 'production'){
        sendErrorProd(err, res)
    
    }
    
        
  
};