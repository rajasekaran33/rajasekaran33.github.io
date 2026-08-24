express = require('express')
path = require('path')
app = express()
nums = [2,3,4,5,2,4]

app.use(express.static(path.join(__dirname, 'public', 'index.html')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/nums',(req,res)=>{
    res.json({nums})
})

app.post("/nums", (req,res)=>{
    const elementToBeInserted = parseInt(req.body.postinput);
    nums.push(elementToBeInserted)
    console.log("element "+elementToBeInserted+" inserted")
    res.json({'status':'ok'})
})
app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})