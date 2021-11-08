import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const updateAdministrator = async (args: Prisma.AdministratorUpdateArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/update`).send({ data: args })

  return response.body.data
}
