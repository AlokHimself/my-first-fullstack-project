const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const {currentUser} = require('./user')
const User = require('./user')
User.currentUser



app.use(express.urlencoded())

 // routing  "/"

 app.get('/',function(request, response){
    //  const directory =path.join(__dirname+"/index.html")
    //  console.log(directory)
     response.sendFile(path.join(__dirname+"/index.html"))
 })

 app.get('/success',function(request,response){

    response.sendFile(path.join(__dirname+"/success.html"))

 })

 app.get('/error',function(request,response){

    response.sendFile(path.join(__dirname+"/error.html"))
     
})

app.post('/',function(request,response){
    // console.log(request.body.fname)
    // response.send("Thanks for sending the data")

    const {fname="", password=""} = request.body
    console.log(request.body)
    if(fname===currentUser.fname && password===currentUser.password){
        return response.redirect("/success")
    }else{
        return response.redirect("/error")
    }
     
})




// Let us create two files Error.html and success.html 
// and create routes for them






app.listen(8000, function(){
    console.log('The server is up and listening to requests on port: 8000')
})