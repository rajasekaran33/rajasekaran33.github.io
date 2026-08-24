const express = require('express');
const path = require('path');
const app = express();
nums = [2,3,4,5,2,4]

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.text())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/nums',(req,res)=>{
    res.send(" "+nums.join(","))
})

app.post('/nums', (req,res)=>{
    const newValue = parseInt(req.body)
    nums.push(newValue)
    res.send("element pushed")
})

app.put('/nums', (req,res)=>{
    let newElements = req.body.split(',');
    newElements = newElements.map(element=>parseInt(element))
    nums = newElements
    res.send("new array updated")
})

app.patch('/nums', (req,res)=>{
    console.log('patch')
})

app.delete('/nums', (req,res)=>{
    nums.splice(nums, parseInt(req.body))
    res.send("element deleted")
})

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})