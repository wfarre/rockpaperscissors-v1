let score = 0;

function compare(playerCard, houseCard){
  switch (playerCard) {
    case "Paper":
      if(houseCard === "Paper"){
        document.querySelector(".results").innerHTML = "Draw";
        document.querySelector(".box2>.box-paper2").style.display = "inline-grid";
      } else if (houseCard === "Rock") {
        document.querySelector(".results").innerHTML = "You win";
        document.querySelector(".box2>.box-rock2").style.display = "inline-grid";
        score += 1;
        document.querySelector(".scoreresult").innerHTML = score;
      } else{
        document.querySelector(".results").innerHTML = "You lose";
        document.querySelector(".box2>.box-scissors2").style.display = "inline-grid";
        score -=1;
        document.querySelector(".scoreresult").innerHTML = score;
      }

      break;
      case "Rock":
      if(houseCard === "Rock"){
document.querySelector(".results").innerHTML = "Draw";
        document.querySelector(".box2>.box-rock2").style.display = "inline-grid";
      } else if (houseCard === "Scissors") {
        document.querySelector(".results").innerHTML = "You win";
        document.querySelector(".box2>.box-scissors2").style.display = "inline-grid";
        score += 1;
        document.querySelector(".scoreresult").innerHTML = score;
      } else{
        document.querySelector(".results").innerHTML = "You lose";
        document.querySelector(".box2>.box-paper2").style.display = "inline-grid";
        score -=1;
        document.querySelector(".scoreresult").innerHTML = score;
      }
        break;
        case "Scissors":
        if(houseCard === "Scissors"){
document.querySelector(".results").innerHTML = "Draw";
          document.querySelector(".box2>.box-scissors2").style.display = "inline-grid";
        } else if (houseCard === "Paper") {
          document.querySelector(".results").innerHTML = "You win";
          document.querySelector(".box2>.box-paper2").style.display = "inline-grid";
          score += 1;
          document.querySelector(".scoreresult").innerHTML = score;
        } else{
          document.querySelector(".results").innerHTML = "You lose";
          document.querySelector(".box2>.box-rock2").style.display = "inline-grid";
          score -=1;
          document.querySelector(".scoreresult").innerHTML = score;
        }
          break;

    default:console.log(playerCard);
  }
}

function houseCardAttribution(playerCard) {
  let houseCard;

  let randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber === 0){
    houseCard = "Paper";
  } else if (randomNumber === 1){
    houseCard = "Rock";
  } else if (randomNumber === 2){
    houseCard = "Scissors";

  }

compare(playerCard, houseCard);

document.querySelector(".play").addEventListener("click", function(){
  document.querySelector(".grid-container-game").style.display = "inline-grid";
  document.querySelector("#results").style.display = "none";
  document.querySelector(".box2>.box-paper2").style.display = "none";
  document.querySelector(".box2>.box-rock2").style.display = "none";
  document.querySelector(".box2>.box-scissors2").style.display = "none";
  document.querySelector(".box1>.box-paper2").style.display = "none";
  document.querySelector(".box1>.box-rock2").style.display = "none";
  document.querySelector(".box1>.box-scissors2").style.display = "none";

})
};

document.querySelector(".paper").addEventListener("click", function(){
  const playerCard = "Paper";
  document.querySelector(".grid-container-game").style.display = "none";
  document.querySelector("#results").style.display = "inline-grid";
  document.querySelector(".box1>.box-paper2").style.display = "inline-grid";
  houseCardAttribution(playerCard);

});
document.querySelector(".scissors").addEventListener("click", function(){
  const playerCard = "Scissors";
  document.querySelector(".grid-container-game").style.display = "none";
  document.querySelector("#results").style.display = "inline-grid";
  document.querySelector(".box1>.box-scissors2").style.display = "inline-grid";
  houseCardAttribution(playerCard);

});


document.querySelector(".rock").addEventListener("click", function(){
  const playerCard = "Rock";
  document.querySelector(".grid-container-game").style.display = "none";
  document.querySelector("#results").style.display = "inline-grid";
  document.querySelector(".box1>.box-rock2").style.display = "inline-grid";
  houseCardAttribution(playerCard);


});

document.querySelector(".rulebutton").addEventListener("click", function(){
  document.querySelector(".shadowbox").style.display = "block";
});

document.querySelector(".shadowbox").addEventListener("click", function(){
  document.querySelector(".shadowbox").style.display = "none";
});
