import {_getManyAccount} from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const includeInput = isEmpty(data.include) ? undefined : data.include
  const orderByInput = isEmpty(data.orderBy) ? undefined : data.orderBy
  const cursorInput = isEmpty(data.cursor) ? undefined : data.cursor
  const takeInput = isEmpty(data.take) ? undefined : data.take
  const skipInput = isEmpty(data.skip) ? undefined : data.skip
  const distinctInput = isEmpty(data.distinct) ? undefined : data.distinct


  const findManyArgs = {
    select: selectInput,
    where: whereInput,
    include: includeInput,
    orderBy: orderByInput,
    cursor: cursorInput,
    take: takeInput,
    skip: skipInput,
    distinct: distinctInput,
  }

  try {
    const accounts = await _getManyAccount(findManyArgs)

    return res.status(200).json({data: accounts})
  } catch (error) {
    console.error("[api] account/getMany", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc()
  .post(post)