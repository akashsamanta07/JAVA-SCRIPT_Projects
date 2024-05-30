let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#btn");
let win = document.querySelector("h2");
let newBtn=document.querySelector(".new-btn");

let turn0 = true;

let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerHTML="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        if(check()){
            win.innerText=`${box.innerText} WON THE GAME`;
            newBtn.classList.remove("old-btn");
            disable();
        }
    });
});

const check = ()=>{
    for(let index of arr){
        if(boxes[index[0]].innerText !== "" && boxes[index[1]].innerText !== "" && boxes[index[2]].innerText !== ""){
            if(boxes[index[0]].innerText === boxes[index[1]].innerText && boxes[index[1]].innerText === boxes[index[2]].innerText){
                return true;
            }
        }
    }
    return false;
}
const reset= () =>{
    turn0=true;
     newBtn.classList.add("class","old-btn");
     win.innerText="";
     enable();
}
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
btn.addEventListener("click",reset);
newBtn.addEventListener("click",reset);
