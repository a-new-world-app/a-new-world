module.exports = req => {
  const auth = req.get("Authorization");
  if (!auth) {
    return null;
  }
  const sessionToken = auth.match(/Bearer (.+)/);
  return await User.findOne({ sessionToken });
};
