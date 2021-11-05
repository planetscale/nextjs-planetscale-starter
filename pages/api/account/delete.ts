import {_deleteAccount} from './_operations'
import { NextApiRequest, NextApiResponse } from "next"
import isEmpty from 'lodash/isEmpty'
import nc from 'next-connect'

const post = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = req.body
  
  if (!data) {
    return res.status(400).json({
      message: 'Missing delete data'
    })
  }
  
  const selectInput = isEmpty(data.select) ? undefined : data.select
  const whereInput = isEmpty(data.where) ? undefined : data.where

  const deleteArgs = {
    select: selectInput,
    where: whereInput
  }
  try {
    const account = await _deleteAccount(deleteArgs)

    return res.status(200).json({
      message: 'Account deleted.',
      data: account
    })
  } catch (error) {
    console.error("[api] account/delete", error)
    return res.status(500).json({statusCode: 500, message: error.message})
  }
}

export default nc()
  .post(post)
