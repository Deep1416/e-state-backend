import jwt from "jsonwebtoken";

// Middleware to check if the user is authenticated
export const shouldBeLoggedIn = (req, res, next) => {
  const token = req.cookies;
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Not Authenticated!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is not valid!" });
    }

    res.status(200).json({message : "You are Authicated!"})
  });
};

// Middleware to check if the user is an admin
export const shouldBeAdmin = (req, res, next) => {
//   if (!req.user || !req.user.isAdmin) {
//     return res.status(403).json({ message: "Access denied, admin only!" });
//   }

//   next(); // Proceed to the next middleware or route handler
};
