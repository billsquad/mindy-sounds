import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { MINDY_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "secret");
        user = await prisma.user.findUnique({
          where: { id },
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
