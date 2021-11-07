import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const deleteManyAccount = async (args: Prisma.AccountDeleteManyArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/deleteMany`).send({ data: args })

  return response.body.data
}
