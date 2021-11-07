import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { createHash } from "crypto";
import { _createAdministrator } from "@api/administrator/_operations";
import { hashPassword } from "@lib/auth/passwords";

/**
 * https://github.com/nextauthjs/next-auth/blob/main/src/server/lib/cookie.js
 * https://github.com/nextauthjs/next-auth/issues/717#issuecomment-827031069
 */

const validateCSRFToken = (req: NextApiRequest, secret: string): boolean => {
  const useSecureCookies = true;
  const csrfTokenName = `${
    useSecureCookies ? "__Host-" : ""
  }next-auth.csrf-token`;

  if (csrfTokenName in req.cookies) {
    const [csrfToken, csrfTokenHash] = req.cookies[csrfTokenName].split("|");
    const expectedCsrfTokenHash = createHash("sha256")
      .update(`${csrfToken}${secret}`)
      .digest("hex");
    if (csrfTokenHash === expectedCsrfTokenHash) {
      // If hash matches then we trust the CSRF token value
      // If this is a POST request and the CSRF Token in the POST request matches
      // the cookie we have already verified is the one we have set, then the token is verified!
      const csrfTokenVerified =
        req.method === "POST" && csrfToken === req.body.csrfToken;
      return csrfTokenVerified;
    }
  }

  return false;
};

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.NEXTAUTH_SECRET;

  // TODO: NOT WORKING FOR SOME VERY FUCKING STRANGE REASON
  // if (!validateCSRFToken(req, secret)) {
  //   return res.status(401).json({
  //     message: "NOPE",
  //   });
  // }
  try {
    const admin = await _createAdministrator({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return res.status(200).json({
      message: "Admin created.",
      data: admin,
    });
  } catch (error) {
    console.error("[api] user/create", error);
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export default nc().post(post);
