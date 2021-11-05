import { Prisma } from "@db/index";
import { ADMINISTRATOR_API_URL } from "..";

export const getManyAdministrator = async (
  args: Prisma.AdministratorFindManyArgs
) => {
  const response = await fetch(`${ADMINISTRATOR_API_URL}/getMany`, {
    method: "POST",
    body: JSON.stringify({ data: args }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const j = await response.json();

  return j.data;
};
