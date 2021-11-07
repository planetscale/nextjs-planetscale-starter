import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const updateUser = async (args: Prisma.UserUpdateArgs) => {
  const response = await superagent.post(`${USER_API_URL}/update`).send({ data: args })

  return response.body.data
}
