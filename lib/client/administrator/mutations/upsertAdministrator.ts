import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const upsertAdministrator = async (args: Prisma.AdministratorUpsertArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/upsert`).send({ data: args })

  return response.body.data
}
