import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const getManyAccount = async (args: Prisma.AccountFindManyArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/getMany`).send({ data: args })

  return response.body.data
}
