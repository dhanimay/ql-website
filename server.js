const express = require('express');
const graphqlHTTP = require('express-graphql');
const bodyParser = require('body-parser');
// import Schema from './server/schema.js';
import Schema from './server/schema1.js';
// import {graphql} from 'graphql';

const app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/src'));

app.use('/graphql', graphqlHTTP ((req) => ({
  schema: Schema,
  rootValue: 'rootValue',
  graphiql: true
})));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('... graphql listening on ' + PORT);
});
