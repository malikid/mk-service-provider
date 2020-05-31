import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3030;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  var clientBuildDir = path.join(__dirname, '../../client/build');
  app.use(express.static(clientBuildDir));
  app.get('/', (req, res) => {
    res.sendFile(path.join(clientBuildDir, 'index.html'));
  });
}

require('./config/init')(app);

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default server;
