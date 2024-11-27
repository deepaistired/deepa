const { error } = require('console');
const express = require('express');
const app = express()
const port = 8000;
const fs=require('fs');
const path= require('path');

app.get("/root",(req,res)=>{
    const filepath=path.join(__dirname,"data.json");
    fs.readFile(filepath,"utf8",(err,data)=>{
        if(err){
            console.error("Error has occured",err);
            return res.status(500).send("Internal server error");
        }
        res.send(data)
    });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
