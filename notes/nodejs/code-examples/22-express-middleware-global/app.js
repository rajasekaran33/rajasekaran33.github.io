express = require('express')
app = express()
app.use(hitCounter())
let count = 0
app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/page1',(req,res)=>{
    res.send("<h1>This is Page 1</h1>")
})

app.get('/page2',(req,res)=>{
    res.send("<h1>This is Page 2</h1>")
})
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000');
})

function hitCounter(){
    return (req,res,next)=>{
        count++;
        console.log("Total Visit Count:"+count)
        next()
    }
}
