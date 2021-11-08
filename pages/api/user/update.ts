import {_updateUser} from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing update data'
    })
  }

  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where
  const updateInput = isEmpty(data.data) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const updateArgs = {
    select: selectInput,
    where: whereInput,
    data: updateInput,
    include: includeInput,
  }

  try {
    const user = await _updateUser({
      where: updateArgs.where,
      data: updateArgs.data,
      select: updateArgs.select,
      include: updateArgs.include
    })
    
    return res.status(200).json({
      message: 'User updated.',
      data: user
    })
  } catch (error) {
    console.error("[api] user/update", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc()
  .post(post)
