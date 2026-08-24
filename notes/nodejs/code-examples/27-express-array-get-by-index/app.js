express = require('express')
app = express()
nums = [2,3,4,5,2,4]
app.get('/',(req,res)=>{
    res.send("Elements: "+nums.join(","))
})
app.get('/min', (req,res)=>{
    res.send("Minimum: "+Math.min(...nums))
})

app.get('/max', (req,res)=>{
   res.send("Maximum: "+Math.max(...nums))
})

app.get('/index/:idx', (req,res)=>{
    const idx = req.params.idx;
    if(idx<nums.length){
        res.send("Element in the index"+idx+" is "+nums[idx])
    }
    else{
        res.send("Invalid Index");
    }
});

app.get('/start/:sdx/end/:edx', (req,res)=>{
    const sdx = req.params.sdx;
    const edx = req.params.edx;

    if(edx<nums.length && sdx<edx){
        res.send("Element from index "+sdx+" to "+edx+" is "+nums.slice(sdx,edx))
    }
    else{
        res.send("Invalid Index");
    }
});

app.listen(3000, ()=>{
    console.log('Server running at http://localhost:3000/');
})