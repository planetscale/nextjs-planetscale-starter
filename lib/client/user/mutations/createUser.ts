import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const createUser = async (args: Prisma.UserCreateArgs) => {
  const response = await superagent.post(`${USER_API_URL}/create`).send({ data: args })

  return response.body.data
}
