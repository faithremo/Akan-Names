let akanNames=document.getElementById("akanNames");
akanNames.addEventListener("submit", (Event)=>{
    Event.preventDefault();

var Male_Names=["Kwado","Kwabena","Kwahu","Yaw","Kofi","Kwame","Kwasi"];
var Female_Names=["Adowa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];
Date_of_Birth=document.getElementById("date");
Selected_Gender=document.getElementByName("gender");

Date_of_Birth=new Date(Date_of_Birth);

let year=Date_of_Birth.getFullYear();
let month=Date_of_Birth.getMonth() +1;
let day=Date_of_Birth.getDate();

CC=parseInt(year.substring(0,1));
YY=parseInt(year.substring(2,3));
MM=month;
DD=day;

d=(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;



});


