import "dotenv/config"
import express from 'express'
const app=express();
const port=process.env.PORT || 4000;
app.get('/home', (request,response)=>{

    response.json({
        user:'name',
        pass:'test'
    });
});

app.listen(port,()=>{
console.log('App runing',port);

})