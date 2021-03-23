const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('thank you for calling me')
})

app.listen(4050,()=> console.log('listening from port 4050'))