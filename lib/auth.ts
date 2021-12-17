import jwt, { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { MINDY_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      type JwtPayloadExtended = JwtPayload & { id: number };

      try {
        const decodedData = jwt.verify(token, "secret") as JwtPayloadExtended;
        user = await prisma.user.findUnique({
          where: { id: decodedData.id },
        });

        if (!user) {
          throw new Error("User does not exist.");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Unauthorized." });
        return;
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Unauthorized." });
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, "secret");
  return user;
};
