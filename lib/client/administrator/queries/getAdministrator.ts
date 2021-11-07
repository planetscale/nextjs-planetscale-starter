import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const getAdministrator = async (args: Prisma.AdministratorFindUniqueArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/get`).send({ data: args })

  return response.body.data
}
