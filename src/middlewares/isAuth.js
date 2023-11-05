export function isAuth(req, res, next) {
  console.log(111, req);
  const data = { ...req.body };

  let isAdmin = true;
  if (!isAdmin) {
    return res.status(401).send("Unauthorized");
  }
  const user = { isAdmin: true, name: "admin" };

  req.user = user;
  //   next();
}
