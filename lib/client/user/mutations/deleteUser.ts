import { Prisma } from "@db/index"
import superagent from "superagent"
import { USER_API_URL } from ".."

export const deleteUser = async (args: Prisma.UserDeleteArgs) => {
  const response = await superagent.post(`${USER_API_URL}/delete`).send({ data: args })

  return response.body.data
}
