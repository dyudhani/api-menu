import { Response } from 'express';

interface Result {
  status: number;
  success: boolean;
  message: string;
  data: any;
}

const response = (res: Response, status: number, success: boolean, message: string, data: any): Response => {
  let result: Result = {
    status,
    success,
    message,
    data
  };

  return res.status(status).json(result);
}

module.exports = { response };