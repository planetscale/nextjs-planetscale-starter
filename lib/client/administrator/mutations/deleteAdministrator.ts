import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const deleteAdministrator = async (args: Prisma.AdministratorDeleteArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/delete`).send({ data: args })

  return response.body.data
}
