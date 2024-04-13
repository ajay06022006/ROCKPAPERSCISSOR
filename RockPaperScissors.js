let userscore=0;
let computerscore=0;

const scoreofuser=document.querySelector("#user-score")

const scoreofcomp=document.querySelector("#computer-score")


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const playgame =(choiceid)=>
{

console.log(`Userchoice = `,choiceid)
const computerchoice = compchoice();
console.log(`Compchoice = `,computerchoice)

if(choiceid==computerchoice)
{   draw();

}
else{
    let userwin = true;
    if(choiceid === "Rock")
    {
        userwin = computerchoice ==  "Paper" ? false:true;
    }
    else if(choiceid==="Paper")
    {
        userwin = computerchoice =="Scissor"? false:true;
    }
    else{
        userwin = computerchoice=="Rock"? false:true;
    }
    
    showWinner(userwin,choiceid, computerchoice);
}

}

const compchoice =()=>{

const options = ["Rock","Paper","Scissor"]
const ridx = Math.floor(Math.random()*3)

return options[ridx];
}




choices.forEach((choice) => {
    console.log(choices);
    choice.addEventListener("click",()=>{
        const choiceid = choice.getAttribute("id")
        console.log(`The choice which was clicked was ${choiceid}`);
        playgame(choiceid);

     
})

});



const draw=()=>{
    console.log("draw");
    msg.innerText = `Draw!,Please Play Again.`
    msg.style.background = "#AFD198"
    msg.style.color = "black"
}
const showWinner =(userwin, choiceid, computerchoice) =>{
  
    if (userwin) {
        userscore++
        scoreofuser.innerText=userscore;
        console.log("You Won!",choiceid);
        msg.innerText = `You won! Your ${choiceid} beats ${computerchoice}`;
        msg.style.background = "#071c38"
        msg.style.color = "white"
    }
    else{
        computerscore++
        scoreofcomp.innerText=computerscore;
        console.log("You lose!");
        msg.innerText = `You lose! Computer Choice ${computerchoice} beats ${choiceid}`
        msg.style.background = "Red"
        msg.style.color = "white"
    }
    
    }
