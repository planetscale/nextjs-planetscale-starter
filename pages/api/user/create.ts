import {_createUser, _existsUser} from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing create data'
    })
  }

  const selectInput = isEmpty(data.select) ? undefined : data.select
  const createInput = isEmpty(data.data) ? undefined : data.data
  const includeInput = isEmpty(data.include) ? undefined : data.include
  
  const createArgs = {
    select: selectInput,
    include: includeInput,
    data: createInput
  }

  try {
    const user = await _createUser(createArgs)
    
    return res.status(200).json({
      message: 'User created.',
      data: user
    })
  } catch (error) {
    console.error("[api] user/create", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc()
  .post(post)
