const express = require('express');
const path = require('path');
const app = express();
nums = [2,3,4,5,2,4]
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/nums',(req,res)=>{
    res.send(" "+nums.join(","))
})

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})