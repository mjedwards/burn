import { AuthenticationError } from "apollo-server"
import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config"

export const checkAuth = (context) => {
  // context.req.headers.Authorization = "";
  const authHeader = context.req.headers.authorization;
  console.log(context.req.headers);
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      console.log(token);
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
