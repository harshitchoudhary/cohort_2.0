/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime() {
    let v1, v2;
    let var1,var2,sum=0;
    v1 = new Date() 
    var1= v1.getSeconds();
    for(let i = 1; i<=100; i++){
        sum+=i;
    }
    v2 = new Date();
    var2= v2.getSeconds();
    console.log(`Time in seconds: ${var2-var1} and Sum is: ${sum}`);
    sum = 0;
    v1 = new Date() 
    var1= v1.getSeconds();
    for(let i = 1; i<=100000; i++){
        sum+=i;
    }
    v2 = new Date();
    var2= v2.getSeconds();
    console.log(`Time in seconds: ${var2-var1} and Sum is: ${sum}`);
    sum = 0;
    v1 = new Date() 
    var1= v1.getSeconds();
    for(let i = 1; i<=1000000000; i++){
        sum+=i;
    }
    v2 = new Date();
    var2= v2.getSeconds();
    console.log(`Time in seconds: ${var2-var1} and Sum is: ${sum}`);
    sum = 0;
}
console.log(calculateTime());