import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const getManyAdministrator = async (args: Prisma.AdministratorFindManyArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/getMany`).send({ data: args })

  return response.body.data
}
