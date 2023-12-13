import { envs } from "../../config/enviroments/enviroments";
import { AppError } from "./appError.js";



const handleCastError23505 = () => {
  return new AppError ('Duplicate field value: please another value')

}

const sendErrorDev = (err, res) => {
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
        err,
    });
}

const sendErrorProd = (err, res) => {

    //codigo
  if(err.isOperational){
    // operational, trusted error: sen message to client 
    return res.status(err.statusCode).json({
        status: err.status,
        message:err.message,
    })

  } else {
    // programming or other unknow error: don't leak error detail

    console.log("ERROR:",err);
    return res.status(500).json({
        status:'fail',
        message: 'Something went very wrong!',
    })
  }

};






export const globalErrorHandler = (err,req, res, next) => {

   //errores 400 si no errores 560 
    err.statusCode = err.statusCode // 500;
   //si viene null devuelve fail  
    err.status = err.status //'fail';
    
    
    if(envs.NODE_ENV === 'development'){
        sendErrorDev(err, res)
        
    }
    
    if(envs.NODE_ENV === 'production'){

        let error = err;
        
        if(err.parent.code === '23505') error = handleCastError23505();

        sendErrorProd(err, res)
    
    }        
  
};