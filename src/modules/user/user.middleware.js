import { AppError } from "../../common/errors/appError.js";
import { UserService } from "./user.service.js";

export const validaExistUser = async (req, res, next) => {
  try {
    
    const { id } = req.params;

    const user = await UserService.findOne(id);


    if (!user) {
      return next(new AppError(`user with id: ${id} not found`, 404))
     
    }

    req.user = user;

    next();

  } catch (error) {

    console.log(error);

    return res.status(500).json({

      status: 'fail',

      message: 'something went very wrang!',

      error,
    });
  }
};