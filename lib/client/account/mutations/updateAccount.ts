import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const updateAccount = async (args: Prisma.AccountUpdateArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/update`).send({ data: args })

  return response.body.data
}
