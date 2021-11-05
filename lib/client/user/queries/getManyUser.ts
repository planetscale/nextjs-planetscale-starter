import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const getManyUser = async (args: Prisma.UserFindManyArgs) => {
  const response = await superagent.post(`${USER_API_URL}/getMany`).send({ data: args })

  return response.body.data
}
