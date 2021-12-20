import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const salt = bcrypt.genSaltSync();
    const { username, email, password } = req.body;

    let user;

    try {
      user = await prisma.user.create({
        data: {
          username,
          email,
          password: bcrypt.hashSync(password, salt),
        },
      });
    } catch (e) {
      res.status(401);
      res.json({ error: "User already exists." });
      return;
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        time: Date.now(),
      },
      "secret",
      { expiresIn: "8h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("MINDY_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 8,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    res.json({ id: user.id, username: user.username, email: user.email });
  } else {
    res.status(404).json({ error: "Bad Request" });
  }
};
