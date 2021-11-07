import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const updateManyUser = async (args: Prisma.UserUpdateManyArgs) => {
  const response = await superagent.post(`${USER_API_URL}/updateMany`).send({ data: args })

  return response.body.data
}
