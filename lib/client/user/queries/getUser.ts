import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const getUser = async (args: Prisma.UserFindUniqueArgs) => {
  const response = await superagent.post(`${USER_API_URL}/get`).send({ data: args })

  return response.body.data
}
