module.exports = app => {
  require("./auth")(app);
  require("./path")(app);
};
