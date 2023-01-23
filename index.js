const  request_one  = require("requests")
const express = require("express")
const app =express()
const shopify=require("@shopify/shopify-api")
var bodyParser = require('body-parser')
app.use(bodyParser.json());

const port = 3400


// const client = new shopify.clients.Rest({session});
// const response = client.get({path: 'shop'});

const productId = "11235813213455";
// `session` is built as part of the OAuth process
// const client = new shopify.clients.Rest({session});
// const product =  client.get({
//   path: `products/${productId}`,
//   query: {id: 1, title: "title"}
// });


let apikey='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'
let pass='neille'
let endpoint=''

let getorders={
  'method':'GET',
  'url':`https://vajro-interview.myshopify.com/admin/oauth/access_scopes.json`,
  'header':{
    'Content-Type':'application/json'
  }
}
app.get("/getorders",(req,resp)=>{
  request_one(getorders ,function(error,res){
if(error) throw new Error();;
resp.send(res.body)
})

})

app.listen(port,() => {
  console.log("server listening in port",port)
})
