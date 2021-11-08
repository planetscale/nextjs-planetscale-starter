import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const upsertUser = async (args: Prisma.UserUpsertArgs) => {
  const response = await superagent.post(`${USER_API_URL}/upsert`).send({ data: args })

  return response.body.data
}
