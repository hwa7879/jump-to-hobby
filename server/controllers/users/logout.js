module.exports = (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.status(200).send({ message: "successfully signed out!" });
  } else {
    res.status(400).send({ message: "you're currently not logined" });
  }
};
