module.exports = (req, res, next) => {
  console.log(req.session.currentUser);

  next();
};
