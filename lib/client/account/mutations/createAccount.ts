import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const createAccount = async (args: Prisma.AccountCreateArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/create`).send({ data: args })

  return response.body.data
}
