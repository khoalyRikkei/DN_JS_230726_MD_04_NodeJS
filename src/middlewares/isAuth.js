export function isAuth(req, res, next) {
  console.log(111, req);
  const data = { ...req.body };

  let isAdmin = true;
  if (!isAdmin) {
    return res.status(404).send("Unauthorized");
  }
  const user = { isAdmin: true, password: "Hello wword" };

  req.user = user;
  //   next();
}
