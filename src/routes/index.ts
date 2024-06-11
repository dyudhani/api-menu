import { Request, Response } from "express"

const router = require('express').Router()
const { response } = require('../utils/response.utils')

router.get('/', (req: Request, res: Response) => {
  return response(res, 200, true, 'Welcome to the API', null)
})

module.exports = router