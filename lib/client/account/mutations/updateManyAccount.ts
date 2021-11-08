import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const updateManyAccount = async (args: Prisma.AccountUpdateManyArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/updateMany`).send({ data: args })

  return response.body.data
}
