const validator = require('../helper/validate');

const postRules = (req, res, next) => {
  const validationRule = {
    user_id: 'required|string',
    text: 'required|string',
    image: 'required|string',
    date: 'required|string',
    number_of_likes: 'required|numeric',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const userRules = (req, res, next) => {
  const validationRule = {
    first_name: 'required|string',
    last_name: 'required|string',
    email: 'required|string',
    phone_number: 'required|numeric',
    user_name: 'required|string',
    user_avatar: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  postRules,
  userRules
};