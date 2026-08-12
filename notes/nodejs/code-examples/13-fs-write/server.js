fs = require('fs')

fs.appendFile('data.txt','\nThis file Content' ,(err)=>{
    if(err){
        console.log("file not available");
    }
    else{
        console.log("file written successfully");
    }
})