import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const getAccount = async (args: Prisma.AccountFindUniqueArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/get`).send({ data: args })

  return response.body.data
}
