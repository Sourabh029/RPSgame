let choices = document.querySelectorAll(".choice");
let myScore = document.querySelector("#score1");
let coScore = document.querySelector("#score2");
let Pmsg= document.querySelector("#p-msg");
let Cmsg= document.querySelector("#c-msg");
let msg = document.querySelector("#msg");
let myChoice = "";
let myTurn = true;
let comChoice = "";
let compScore = 0;
let yourScore = 0;



for (let ch of choices) {

    ch.addEventListener("click", () => {
        myChoice = ch.getAttribute("id");
        console.log(myChoice);
        myTurn = false;
        comChoice = playComp(myTurn);

        let winner = findWinner(myChoice, comChoice);
        msg.innerText = winner;
        myScore.innerText = yourScore;
        coScore.innerText = compScore;
        Pmsg.innerText=myChoice;



    })

}



let playComp = (turn) => {

    let options = ["rock", "paper", "scissors"];
    if (turn === false) {
        op = Math.floor(Math.random() * 3);
        myTurn = true;
    }
    Cmsg.innerText=options[op];
    return options[op];

}


let findWinner = (me, comp) => {
    if (me === comp) {
        return "draw";
    }
    else if (me === "rock" && comp === "paper") {
        compScore++;
        return "computer won";
    }
    else if (me === "paper" && comp === "scissors") {
        compScore++;
        return "computer won";
    }
    else if (me === "scissors" && comp === "rock") {
        compScore++;
        return "computer won";
    }
    else {
        yourScore++;
        return "You Won";
    }


}


