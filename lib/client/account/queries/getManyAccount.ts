import { Prisma } from "@db/index";
import { ACCOUNT_API_URL } from "..";

export const getManyAccount = async (args: Prisma.AccountFindManyArgs) => {
  const response = await fetch(`${ACCOUNT_API_URL}/getMany`, {
    method: "POST",
    body: JSON.stringify({ data: args }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const j = await response.json();

  return j.data;
};
