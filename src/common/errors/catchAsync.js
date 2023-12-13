

export const catchAsync = (fn) => {
    // el catchAsync es para quitar los try y catch y capturar los errores
    return (req, res, next) => {
      fn(req, res, next).catch((error) => next(error));
    };
  };
  