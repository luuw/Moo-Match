

function changeImage(CowPic){
  var img = document.getElementById(CowPic);
  

  if(img.src .endsWith("images/cow1.png")){
    img.src = 'images/cow2.png';
  }else if(img.src .endsWith("images/cow2.png")){
    img.src = 'images/cow3.png';
  }else if(img.src .endsWith("images/cow3.png")){
    img.src = 'images/cow4.png';
  }else if(img.src .endsWith("images/cow4.png")){
    img.src = 'images/cow1.png';
  }

  console.log(img);
  console.log(img.src);
  
}

function checkCorrect(){
  var first = document.getElementById("a");
  var second = document.getElementById("b");
  var third = document.getElementById("c");
  var fourth = document.getElementById("d");

  var box = document.getElementById("box");

  console.log(first);
  console.log(second);
  console.log(third);
  console.log(fourth);

  if(first.src .endsWith("images/cow1.png") && second.src .endsWith("images/cow2.png") && third.src .endsWith("images/cow3.png") && fourth.src .endsWith("images/cow4.png")){
    //createP("CONGRATULATIONS");
    first.hidden=true;
    second.hidden=true;
    third.hidden=true;
    fourth.hidden=true;

    var gif = document.createElement("img");
    gif.src = "images/congrats.gif";
    gif.classList.add("full");
    box.appendChild(gif);
    
  }
  else{
    alert("incorrect");
  }

  console.log(document.getElementById("a").getAttribute("src"));
  
}







/*
if(first.getAttribute("src") .endsWith("images/cow1.png") && second.getAttribute("src") .endsWith("images/cow2.png") && 
third.getAttribute("src") .endsWith("images/cow3.png") && fourth.getAttribute("src") .endsWith("images/cow4.png")){
  createP("CONGRATULATIONS");
}





/* NOT WORKING/ not using anymore
function crfunction setup(){ 
   createCanvas(700,500); 
   
}
eateCircle(xPos, yPos){ 
    circle(xPos, yPos, 50); 
}

function createSquare(x, y, d){ 
    square(x, y, d); 
}


var x = 100;
var y = 100;

var cheeseX = 600;
var cheeseY = 400;


function preload(){
    //loading all three images
  mouse = loadImage('images/mouse.png');
  cheese = loadImage('images/cheese.png');
}
*/




//DUMP
/*function h1Clicked(){
  //cowPart1.html("This was clicked on"); 
  html.getElementById("img").src="images/cow3.png";
}

function changeImage() {

  if (document.getElementById("imgClickAndChange").src == "images/cow1") 
  {
      document.getElementById("imgClickAndChange").src = "images/cow1";
  }
  else
  {
      document.getElementById("imgClickAndChange").src = "images/cow1";
  }
}

function show() {
  /* Get image and change value 
  of src attribute */
/*  let image = document.getElementById("image");
  image.src = 
"https://media.geeksforgeeks.org/wp-content/uploads/20210915115837/gfg3.png"
  document.getElementById("btnID")
      .style.display = "none";
}


 function draw(){ 
   // image(mouse,x,y,150,150);
  //image (cheese,500,505, 150, 150);
background('#FDF6AD'); 
  circle(mouseX, mouseY, 50);
    
  square(cheeseX, cheeseY, 50);

  
  
if(AbstractRange(mouseX-cheeseX)<20  && AbstractRange(mouseY-cheeseY)<20){
    createP("You Win!");
}

}



function keyPressed() {
    if (key === UP_ARROW) {
      var y = y - 50;
      print(y);
    }
  
    if (keyCode === LEFT_ARROW) {
      x = x - 50;
    }
    if (keyCode === DOWN_ARROW) {
        var y = y + 50;
    }
    if (keyCode === RIGHT_ARROW) {
      var x = x + 50;
    }
}

*/