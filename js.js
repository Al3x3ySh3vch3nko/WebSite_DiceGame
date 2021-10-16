// Code1

// Var1

var randomNumber1 = Math.floor(Math.random() * Math.floor(6) + 1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// Var2

var randomNumber2 = Math.floor(Math.random() * Math.floor(6) + 1);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "+ Player 1 WINs !";
}

else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 WINs ! +";
}

else
{
    document.querySelector("h1").innerHTML = "Nobody WINs !";
}

// Code2

// Var1

//     var random1  = Math.floor(Math.random() * Math.floor(6) + 1);
    
//     var image1 =  document.querySelectorAll("img")[0]; 

//     if (random1 === 1)
//     {
//         image1.setAttribute("src", "/images/dice1.png");
//     }
    
//     else if (random1 === 2)
//     {
//         image1.setAttribute("src", "/images/dice2.png");
//     }
    
//     else if (random1 === 3)
//     {
//         image1.setAttribute("src", "/images/dice3.png");
//     }

//     else if (random1 === 4)
//     {
//         image1.setAttribute("src", "/images/dice4.png");
//     }
    
//     else if (random1 === 5)
//     {
//         image1.setAttribute("src", "/images/dice5.png");
//     }
    
//     else if (random1 === 6)
//     {
//         image1.setAttribute("src", "/images/dice6.png");
//     }

//     // Var2
    
//     var random2  = Math.floor(Math.random() * Math.floor(6) + 1);
        
//     if (random2 === 1)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice1.png");
//     }
    
//     else if (random2 === 2)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice2.png");
//     }
    
//     else if (random2 === 3)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice3.png");
//     }
    
//     else if (random2 === 4)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice4.png");
//     }
    
//     else if (random2 === 5)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice5.png");
//     }
    
//     else if (random2 === 6)
//     {
//         document.getElementsByClassName("img2").setAttribute("src", "/images/dice6.png");
//     }

//     else if (random1 > random2)
//     {
//         document.querySelector("h1").innerHTML = "player 1 WINs !";
//     }

//     if (random1 < random2)
//     {
//         document.querySelector("h1").innerHTML = "player 2 WINs !";
//     }
//     else
//     {
//         document.querySelector("h1").innerHTML = "Nobody WIN !";
//     }