import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const deleteManyAdministrator = async (args: Prisma.AdministratorDeleteManyArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/deleteMany`).send({ data: args })

  return response.body.data
}
