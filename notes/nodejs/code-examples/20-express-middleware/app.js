express = require('express')
app = express()
app.use(middleWare())
app.get('/',(req,res)=>{
    console.log("Before Response")
    res.send("Hello Express")
    console.log("After Response")
})
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})

function middleWare(){
    return (req,res,next)=>{
        console.log('middleWare called')
        next()
    }
}
