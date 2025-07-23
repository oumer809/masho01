import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();
export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      console.log("authorised");
      next();
    } catch (error) {
      res.status(500).json({ msg: "Not authorised, token failed!" });

      console.log(error);
    }
  }
  if (!token) {
    return res.status(404).json({ msg: "Not authorised, no token!" });
  }
};
