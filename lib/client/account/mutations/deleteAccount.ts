import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const deleteAccount = async (args: Prisma.AccountDeleteArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/delete`).send({ data: args })

  return response.body.data
}
