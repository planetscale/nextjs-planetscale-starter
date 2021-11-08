import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const deleteManyUser = async (args: Prisma.UserDeleteManyArgs) => {
  const response = await superagent.post(`${USER_API_URL}/deleteMany`).send({ data: args })

  return response.body.data
}
