express = require('express')
app = express()
let homeCount = 0
let page1Count = 0
let page2Count = 0

app.get('/',homeHitCounter(),(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/page1',page1HitCounter(),(req,res)=>{
    res.send("<h1>This is Page 1</h1>")
})

app.get('/page2',page2HitCounter(),(req,res)=>{
    res.send("<h1>This is Page 2</h1>")
})
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
})

function homeHitCounter(){
    return (req,res,next)=>{
        homeCount++;
        console.log("Visit Count [Home]:"+homeCount)
        next()
    }
}

function page1HitCounter(){
    return (req,res,next)=>{
        page1Count++;
        console.log("Visit Count [Page1]:"+page1Count)
        next()
    }
}

function page2HitCounter(){
    return (req,res,next)=>{
        page2Count++;
        console.log("Visit Count [Page2]:"+page2Count)
        next()
    }
}
