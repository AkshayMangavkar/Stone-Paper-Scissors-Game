let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");


const getcompchoice =() =>{
    const options = ["rock","paper","scissors"];
    const randind = Math.floor(Math.random() * 3);
    return options[randind];
};

const showinner=(userwin, userchoice, compchoice)=> {
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;

        console.log("YOU WIN !!");
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        
        console.log("YOU LOSE ... ");
        msg.innerText = `You Lost.. ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor ="red";


    }
};


const playgame= (userchoice) => {
    console.log("user choice=",userchoice);
    //get computer choice now
    const compchoice=getcompchoice();
    console.log("comp choice =", compchoice);

    if(userchoice === compchoice){
       console.log("Game was Draw ...");
       msg.innerText = "Game was Draw. Try Again..";
       msg.style.backgroundColor="blue";

    }else{
        let userwin=true;
        if(userchoice==="rock") {
            //scissor paper
            userwin= compchoice==="paper" ? false:true;
        }else if(userchoice==="paper"){
            //rock scissors
            userwin=compchoice==="scissors"? false:true;
        }else{
            //rock  paper
            userwin=compchoice==="rock"? false:true;
        }
        showinner(userwin,userchoice,compchoice);
    }

}



choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        const userchoice=choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);
    });
});
