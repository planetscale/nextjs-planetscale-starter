import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const createAdministrator = async (args: Prisma.AdministratorCreateArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/create`).send({ data: args })

  return response.body.data
}
