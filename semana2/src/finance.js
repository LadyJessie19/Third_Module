import express from "express";
import { makeTransaction } from "./factories/transactionFactory";

const app = express();

const app.use(express.json())

app.listen(3333, () => {
  console.log("listening on 3333");
});

app.post("/transactions", async (req, res) => {
  // const { headers, body, query, params } = req
  const data = req.body;
  const transaction = makeTransaction(data);
  await database.insertOne(transaction);

  res.status(201).json({
    error: false,
    data: transaction,
  });
});

/* 

1 - Headers
2 - Body
3 - Params
4 - Query

Ela não aceita JSON

*/
