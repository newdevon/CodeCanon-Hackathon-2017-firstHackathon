const Clarifai = require('clarifai');
const app = new Clarifai.App({
    apiKey: 'aef92d12836141e2b4286cdf1e15ae2c'
});

// Put your training code here
app.inputs.create([{
    "url" : "https://i.imgur.com/kGiTtM0.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ]
  } , {
    "url" : "https://i.imgur.com/6RGjxNg.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : false } ,
      {"id" : "steven" , "value" : true } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ]
  } , {
    "url" : "https://i.imgur.com/cxfkvGO.jpg" , 
    "concepts" : [
      {"id" : "vasile" , "value" : false } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : true }
    ]
  }, {
    "url" : "https://i.imgur.com/yKz4eGY.jpg" , 
    "concepts" : [
      {"id" : "vasile" , "value" : false } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : true } ,
      {"id" : "robert" , "value" : false }
    ]
  } , {
    "url" : "https://i.imgur.com/gC861zv.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ]
  }, {
    "url" : "https://i.imgur.com/rvTlJQu.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ]
  }, {
    "url" : "https://i.imgur.com/2PQvslN.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ] 
  }, {   
    "url" : "https://i.imgur.com/T3ZSEho.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ] 
  }, {
    "url" : "https://i.imgur.com/7PW6Fx6.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ] 
  }, {
    "url" : "https://i.imgur.com/1vfrQ8B.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ] 
  }, {
    "url" : "https://i.imgur.com/RYDqZlx.jpg",
    "concepts" : [
      {"id" : "vasile" , "value" : true } ,
      {"id" : "steven" , "value" : false } ,
      {"id" : "nasko" , "value" : false } ,
      {"id" : "robert" , "value" : false }
    ] 
  }]).then(
    createModel,
    errorHandler
  );


// once inputs are created, create model by giving name and list of concepts
function createModel(inputs) {
    app.models.create('faces', ["vasile", "steven", "nasko", "robert"]).then(
      trainModel,
      errorHandler
    );
  }
  
  // after model is created, you can now train the model
  function trainModel(model) {
    model.train().then(
      predictModel,
      errorHandler
    );
  }
  
  // after training the model, you can now use it to predict on other inputs
  function predictModel(model) {
    model.predict(['https://i.imgur.com/TK4JXjz.jpg', 'https://i.imgur.com/uCLRPPo.jpg', 'https://i.imgur.com/9n3usvr.jpg','https://i.imgur.com/yGjeBEe.jpg']).then(
      function(response) {
        console.log(response);
      }, errorHandler
    );
  }
  
  function errorHandler(err) {
    console.error(err);
  }

  module.exports = app;