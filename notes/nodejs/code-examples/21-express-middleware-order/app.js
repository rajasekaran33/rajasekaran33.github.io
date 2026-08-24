express = require('express')
app = express()

app.use(middleWareOne())
app.use(middleWareTwo())

app.get('/',(req,res)=>{
    console.log("Before Response")
    res.send("Hello Express")
    console.log("After Response")
})
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})

function middleWareOne(){
    return (req,res,next)=>{
        console.log('middleWare 1 called')
        next()
    }
}

function middleWareTwo(){
    return (req,res,next)=>{
        console.log('middleWare 2 called')
        next()
    }
}
