let akanNames=document.getElementByName("akanNames");
akanNames.addEventListener("submit", (e)=>{
    e.preventDefault();


Date_of_Birth=document.getElementById("date").value;
Selected_Gender=document.getElementById("gender").value;

Date_of_Birth=new Date(Date_of_Birth);

let year=Date_of_Birth.getFullYear();
let month=Date_of_Birth.getMonth() +1;
let day=Date_of_Birth.getDate();

CC=year.toString().substr(0, 2);
YY=year.toString().substr(2, 2);
MM=month;
DD=day;

d=(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

d=parseInt(d);

let Akan_Name;

Male_Names=["Kwado","Kwabena","Kwahu","Yaw","Kofi","Kwame","Kwasi"];
Female_Names=["Adowa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];


let BirthDay;

if(d==0 && gender=="Male"){
    BirthDay="Monday";
    Akan_Name= Male_Names[0];
}
else if (d==0 && gender=="Female"){
    DBirthDay="Monday";
    Akan_Name= Female_Names[0];
}

else if(d==0 && gender=="Male"){
    BirthDay="Tuesday";
    Akan_Name= Male_Names[1];
}
else if (d==0 && gender=="Female"){
    BirthDay="Tuesday";
    Akan_Name= Female_Names[1];
}

else if(d==0 && gender=="Male"){
    BirthDay="Wednesday";
    Akan_Name= Male_Names[2];
}
else if (d==0 && gender=="Female"){
    BirthDay="Wednesday";
    Akan_Name= Female_Names[2];
}

else if(d==0 && gender=="Male"){
    BirthDay="Thursday";
    Akan_Name= Male_Names[3];
}
else if (d==0 && gender=="Female"){
    BirthDay="Thursday";
    Akan_Name= Female_Names[3];
}

else if(d==0 && gender=="Male"){
    BirthDay="Friday";
    Akan_Name= Male_Names[4];
}
else if (d==0 && gender=="Female"){
    BirthDay="Friday";
    Akan_Name= Female_Names[4];
}

else if(d==0 && gender=="Male"){
    BirthDay="Saturday";
    Akan_Name= Male_Names[5];
}
else if (d==0 && gender=="Female"){
    BirthDay="Saturday";
    Akan_Name= Female_Names[5];
}

else if(d==0 && gender=="Male"){
    BirthDay="Sunday";
    Akan_Name= Male_Names[6];
}
else if (d==0 && gender=="Female"){
    BirthDay="Sunday";
    Akan_Name= Female_Names[6];
}

let output=document.getElementById("display_output").innerHTML="Your Akan Name is" + Akan_Name + "as you were born on a"
+ BirthDay + "!"
document.getElementById("akanNames").reset();

});


