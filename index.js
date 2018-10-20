'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const creds = require('./Creds');
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(cors());
const PORT = 8081 || process.env.PORT;
const clarifai = require('clarifai');
const clarifyApp = new clarifai.App({
    apiKey : creds.api_key
});

app.get('/getObject',(req,res)=>{
    clarifyApp.models.predict(clarifai.GENERAL_MODEL, req.query.url)
    .then(response=>{
        res.json(response.outputs[0].data.concepts.
            sort((a,b)=>{
                return b.value - a.value;
            }).slice(0,9));
    }, err=>{
        console.log(err);
    })
});

app.get('/getTrained',(req,res)=>{
    clarifyApp.models.predict()
});

app.listen(PORT,()=>{
    console.log('Listening'+PORT);
});