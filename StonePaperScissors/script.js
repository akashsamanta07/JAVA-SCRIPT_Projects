const move = document.querySelectorAll(".choice");
const result=document.querySelector("#result");
const userNumber = document.querySelector("#userCount");
const compNumber=document.querySelector("#opponentCount");
const reset = document.querySelector("#reset");


//Build game

const computerTurn=()=>{
    const arr=["stone","paper","scissors"];
    return arr[Math.floor(Math.random()*3)];
}
const showWinner = (win ,user,comp)=>{
    if(win){
        userNumber.innerHTML=parseInt(userNumber.innerHTML)+1;
        result.innerHTML=`You win!. Your ${user} beats ${comp} `;
        result.style.backgroundColor="green";
    }else{
        compNumber.innerHTML=parseInt(compNumber.innerHTML)+1;
        result.innerHTML=`You lost.${comp} beats your ${user} `;
        result.style.backgroundColor="red";
    }
}
const playGameForComputer= (user)=>{
        const comp = computerTurn();
        let win;
        if(user === comp){
            result.innerHTML=" Game was draw play again.";
            result.style.backgroundColor="black";
        }else{
            if(user ==="stone"){
                win = comp === "paper"? false :true;
            }else if(user === "paper"){
                win = comp ==="stone"? true:false;
            }
            else{
                win = comp === stone? false:true;
            }
            showWinner(win,user,comp);
        }
    }
move.forEach((value)=>{
    value.addEventListener("click",()=>{
    const user=value.getAttribute("id");
     playGameForComputer(user);
    });
});

//reset game
reset.addEventListener("click",()=>{
    userNumber.innerHTML=0;
    compNumber.innerHTML=0;
    result.innerHTML="RESULT";
    result.style.backgroundColor="black";

});

