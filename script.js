const quotes = [

{
quote:"The future belongs to those who believe in the beauty of their dreams.",
author:"Eleanor Roosevelt"
},

{
quote:"Success is not final, failure is not fatal. It is the courage to continue that counts.",
author:"Winston Churchill"
},

{
quote:"Dream big and dare to fail.",
author:"Norman Vaughan"
},

{
quote:"The best way to predict the future is to create it.",
author:"Peter Drucker"
},

{
quote:"Your only limit is your mind.",
author:"Unknown"
},

{
quote:"Push yourself because no one else is going to do it for you.",
author:"Unknown"
},

{
quote:"Believe you can and you're halfway there.",
author:"Theodore Roosevelt"
},

{
quote:"Hard work beats talent when talent doesn't work hard.",
author:"Tim Notke"
},

{
quote:"Don't stop until you're proud.",
author:"Unknown"
},

{
quote:"Stay hungry. Stay foolish.",
author:"Steve Jobs"
}

];

const gradients = [

"linear-gradient(135deg,#4facfe,#00f2fe)",

"linear-gradient(135deg,#ff9a9e,#fad0c4)",

"linear-gradient(135deg,#43cea2,#185a9d)",

"linear-gradient(135deg,#fa709a,#fee140)",

"linear-gradient(135deg,#30cfd0,#330867)",

"linear-gradient(135deg,#667eea,#764ba2)",

"linear-gradient(135deg,#f7971e,#ffd200)",

"linear-gradient(135deg,#00c6ff,#0072ff)"

];

function generateQuote(){

let random=Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML=
'"'+quotes[random].quote+'"';

document.getElementById("author").innerHTML=
"- "+quotes[random].author;

document.body.style.background=
gradients[Math.floor(Math.random()*gradients.length)];

const quote=document.getElementById("quote");
const author=document.getElementById("author");

quote.classList.remove("fade");
author.classList.remove("fade");

void quote.offsetWidth;

quote.classList.add("fade");
author.classList.add("fade");

}

function copyQuote(){

let text=
document.getElementById("quote").innerText+
"\n"+
document.getElementById("author").innerText;

navigator.clipboard.writeText(text);

alert("✅ Quote Copied Successfully!");

}

function shareQuote(){

let quote=document.getElementById("quote").innerText;

let author=document.getElementById("author").innerText;

let message=quote+" "+author;

window.open(
"https://wa.me/?text="+encodeURIComponent(message),
"_blank"
);

}

document.addEventListener("keydown",function(event){

if(event.code==="Space"){

event.preventDefault();

generateQuote();

}

});

function updateTime(){

let now=new Date();

document.getElementById("time").innerHTML=
now.toLocaleDateString()+" | "+
now.toLocaleTimeString();

}

setInterval(updateTime,1000);

window.onload=function(){

generateQuote();

updateTime();

};