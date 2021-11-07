import { Prisma } from "@db/index"
import superagent from "superagent"
import { ADMINISTRATOR_API_URL } from ".."

export const updateManyAdministrator = async (args: Prisma.AdministratorUpdateManyArgs) => {
  const response = await superagent.post(`${ADMINISTRATOR_API_URL}/updateMany`).send({ data: args })

  return response.body.data
}
