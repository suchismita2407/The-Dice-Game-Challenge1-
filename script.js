var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "/images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "/images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = '<i style = "color: red;" class="fas fa-flag-checkered"></i> Player 1 Wins!!';
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = 'Player 2 Wins!! <i style = "color: red;" class="fas fa-flag-checkered"></i>';
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}