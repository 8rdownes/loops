function loopOne(){
let time=25;

while (time>0) {
  console.log(time+" seconds left.");
  time=time-1;
}
console.log("Done Son!");
}

function loopTwo(){
let sum=0
for( sum=0;sum<powersOfTwo2;sum++)
return sum
}

function loopThree(symbol, number){
let symbol;
let number;

for(symbol=0;symbol=symbol+symbol){

console.log(symbol);
  }
}

function main(){
    //Testing each function

    loopOne(25);

    let powersOfTwo = loopTwo(2,10);
    let powersOfFive = loopTwo(5,4);
    console.log("The sum is "+powersOfTwo);
    console.log("The sum is "+powersOfFive);

    loopThree("#",6);
    loopThree("$",20);
    loopThree("x",10);

    console.log("You will need to scroll up to check all of them.");
}

//Hit ctrl + Shift + B to run the program.
//Hit ESC to make the printout messages go away.
main();
