let fs = require('fs');
console.log('Hello 1');
function x(){
    console.log('in x');
    fs.readFile('a.txt','utf-8',(err, data)=>{
        console.log(data);
    });
}
console.log('Hello 2');
function readthings(){
    console.log('in readthings');
    return new Promise((resolve)=>{
        resolve(x());
    });
}
console.log('Hello 3');
async function y(){
    console.log('in y');
    let x = await readthings();
}
console.log('Hello 4');
y();
console.log('Hello 5');