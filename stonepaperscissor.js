let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");


choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.querySelector("img").id;
        playGame(userChoice);
    });

});

const GencompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const RandIdx = Math.floor(Math.random()*3);
    return options[RandIdx];
};
const gameDraw = (userChoice, compChoice) => {
    console.log(`Game was drawn, ${userChoice} draws ${compChoice}`);
    msg.innerText = `Game was drawn, ${userChoice} draws ${compChoice}`;
    msg.style.backgroundColor = "#3F4F44";
    msg.style.color = "white";

}
const showWinner = (userWin, compChoice, userChoice) =>{
    if(userWin === true)
    {
        userScore++;
        console.log(`You win!, ${userChoice} beats ${compChoice}`);
        msg.innerText = `You win!, ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#00FF9C";
        userPoints.innerText = userScore;
    }
    else{
        computerScore++
        console.log(`You lose!, ${compChoice} beats ${userChoice}`);
        msg.innerText = `You lose!, ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#F93827";
        compPoints.innerText = computerScore;
    }
}

const playGame = (userChoice) =>{
    console.log("User choice", userChoice);
    const compChoice = GencompChoice();
    console.log("Computer Choice", compChoice);
    if(userChoice === compChoice)
    {
        gameDraw(userChoice, compChoice);
    }
    else
    {
        let userWin = true;
        if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false : true;
        }
     showWinner(userWin, compChoice, userChoice);
    }
};

