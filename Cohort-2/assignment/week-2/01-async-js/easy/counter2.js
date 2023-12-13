let sum = 1;
function timerNoSetInterval(){
    if(sum<10){
        console.clear();
        console.log(`00:00:0${sum}`);
    }
    else{
        console.clear();
        console.log(`00:00:${sum}`);
    }
    sum++;
    setTimeout(timerNoSetInterval,1000);
}
timerNoSetInterval();