
var random1=Math.floor((Math.random()*6 )+ 1);
var random2=Math.floor((Math.random()*6 )+ 1);
var randomimg1="images/dice"+random1+".png";
var randomimg2="images/dice"+random2+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimg1); 

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);

var result=document.querySelector("h1");

if(random1==random2){
    result.textContent="Draw";
}
else if(random1>random2){
    result.textContent="🚩Player1 Wins";
}
else{
    result.textContent="Player2 Wins🚩";
    
}