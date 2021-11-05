import { Prisma } from "@db/index"
import superagent from "superagent"
import { ACCOUNT_API_URL } from ".."

export const upsertAccount = async (args: Prisma.AccountUpsertArgs) => {
  const response = await superagent.post(`${ACCOUNT_API_URL}/upsert`).send({ data: args })

  return response.body.data
}
