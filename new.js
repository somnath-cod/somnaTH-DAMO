let boxes = document.querySelectorAll(".box") ;
let restBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgcontainer =document.querySelector(".msg-container ");
let msg =document.querySelector("#msg");
let turnO = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame= () =>{
    turnO=true;
    enabelBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turnO){
            box.innerText="o";
           turnO= false; 
        }else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;

        checkWiner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    box.innerText=""
    }
}

const enabelBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showWiner=(winer)=> {
msg.innerText=`congratulations,winer is ${winer}`;
msgcontainer.classList.remove("hide");
disabledBoxes()
}
const checkWiner =()=>{
    for(let pattern of winPatterns){
       
        let pos1Val = boxes[pattern[0]].innerText;
          let pos2Val = boxes[pattern[1]].innerText;
  let pos3Val = boxes[pattern[2]].innerText;
  if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""  ){
    if( pos1Val===pos2Val&&pos2Val===pos3Val){
        console.log("winer",pos1Val);
        showWiner(pos1Val);
    }
  }

    }
};  

newGameBtn.addEventListener("click",resetGame)
restBtn.addEventListener("click",resetGame)