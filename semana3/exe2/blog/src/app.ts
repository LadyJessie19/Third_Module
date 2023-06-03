/* I don't quite know, but I think in here is meant to be the express lib. */
/* Express is meant to build the data storage routes, right? */
import express from 'express'
import Routes from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(Routes)

app.listen(port, () => {
    console.log(`Started! Listening port: ${port}`);
    //Address: http://localhost:3333/
  });

  //eof