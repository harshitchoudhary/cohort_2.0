function counter(){
    let sum = 1;
    setInterval(()=>{
        console.log(sum);
        sum++;
    },1000);
}
counter();
