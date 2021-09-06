// const express = require('express');
import express from 'express';
import resolvers from './resolvers.js';
import schema from './schema.js';

import {graphqlHTTP} from 'express-graphql';


const app = express();

app.get('/',(req,res)=>{
    res.send("Running ");
});

const root=resolvers;

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000,()=>console.log("Server Listening on Port 3000"))