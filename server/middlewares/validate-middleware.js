const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const status = 422;
      const message = "fill input correctly";
      console.log(message);
      const extraDetails = err.error[0].message;
  
      const error = {
        status,
        message,
        extraDetails,
      };
      console.log(error);
      next(extraDetails);
    }
  };
  
  module.exports = validate;