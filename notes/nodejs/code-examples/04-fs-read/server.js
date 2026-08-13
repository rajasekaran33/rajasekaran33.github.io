fs = require('fs')

fs.readFile('data.txt', (err, fileContent)=>{
     if(err){
        console.log("file not available");
    }
    else{
        const fc = fileContent.toString();
        console.log(fc);
    }
})

const fc = fs.readFileSync('data.txt');
console.log(fc.toString());