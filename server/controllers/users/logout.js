module.exports = (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.status(200).send({ message: "successfully signed out!" });
  } else {
    res.status(400).send({ message: "you're currently not logined" });
  }
};

// const { accessToken } = req.body;

// if(!accessToken) {
//     res.status(400).send('bad request')
// } else {
//     res.status(200).send('logout success')
// }
