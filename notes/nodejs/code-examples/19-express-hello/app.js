express = require('express')
app = express()
nums = [2,3,4,5,2,4]
app.get('/',(req,res)=>{
    res.send("Hello Express")
})

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})