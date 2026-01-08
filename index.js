const express = require('express')

const app = express();

 app.use(express.json());



app.get('/', (req,res) =>{
    res.send("get request received huyi")
})




app.listen(5000, () =>{
    console.log("server running on port 5000")
})