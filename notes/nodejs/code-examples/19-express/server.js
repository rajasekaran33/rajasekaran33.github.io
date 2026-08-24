express = require('express')
app = express()
nums = [2,3,4,5,2,4]
app.get('/',(req,res)=>{
    res.send("Hello World")
})
// /min /max /duplicate /unique

app.get('/:index', (req,res)=>{
    const idx = req.params.index;
    res.send(""+nums[idx])
})

app.get('/:index/depo/:amount', (req,res)=>{
    console.log(req.params.index)
    console.log(req.params.amount)
      res.send("OK");
})


app.listen(3000)