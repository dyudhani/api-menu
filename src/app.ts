import { Request, Response } from "express";

require("dotenv").config();
const express = require("express");
const router = require("./routes");
const { response } = require("./utils/response.utils");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router)

app.get('/', (req: Request, res: Response) => {
  return response(res, 200, true, 'Welcome to API', null)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})