const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect(`a-new-world://login?user=${JSON.stringify(req.user)}`);
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.json("placeholder");
  });

  app.get("/api/current_user", (req, res) => {
    res.json(req.user);
  });
};
