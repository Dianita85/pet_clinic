


export const globalErrorHandler = (err,req, res, next) => {

    err.statusCode = err.statusCode // 500  /*errores 400 si no errores 560 */
    
    err.status = err.status // 'fail'       /*si viene null devuelve fail */ 
    
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })

}