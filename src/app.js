import express from "express";
import { router } from "./routes/index.js";
import { AppError } from "./common/errors/appError.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}))


//routes
app.use('/api/v1', router);

app.all('*', (req, res, next) => {

    return next(
        new AppError(`Can't fing ${req.originalUrl} on this server!`, 404)
    );
});


app.use((err,req, res, next) => {

    err.statusCode = err.statusCode // 500  /*errores 400 si no errores 560 */
    
    err.status = err.status // 'fail'       /*si viene null devuelve fail */ 
    
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })

})
export default app;