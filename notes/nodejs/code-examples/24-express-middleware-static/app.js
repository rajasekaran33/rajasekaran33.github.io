express = require('express')
path = require('path')
app = express()

app.use(express.static(path.join(__dirname, 'public','index.html')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})