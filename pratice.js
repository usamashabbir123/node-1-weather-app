let inputNum=prompt("enter the number for guess");
let random=Math.floor(Math.random()*100)+1;
let totalGuess=100;
let No_of_count=1;
while(inputNum!==random || No_of_count<=100)
{
 if(inputNum<random)
{
    console.log("you guess number is less than original random number which is "+random+
    " and"+ 
    +totalGuess+ " guess left");
}
else if(inputNum>random)
{
    console.log("you guess number is greater than original random number which is "+random+"and "+totalGuess+" guess left");
}
 random=Math.floor(Math.random()*100)+1;
 inputNum=Number.parseInt(prompt("enter the number for guess"));
No_of_count=No_of_count+1;
totalGuess--;
}
if(inputNum===random)
{
    console.log("you guess is correct congratulations, number is "+random+"and you guess this number in "+No_of_count+" attempt");
}