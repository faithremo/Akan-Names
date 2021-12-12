var Date_of_Birth= document.getElementsById("date");
var CurrentDate = new Date();
var Male_Names=["Kwadwo","Kwabena","Kwahu","Yaw","Kofi","Kwame","Kwasi"];
var Female_Names=["Adowa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];
var Selected_Gender = document.getElementsByName("gender");

function validate(){
    if(document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
        alert( "Please provide a valid year of birth! eg 2019" );
        document.myForm.year.focus() ;
        return false;
     }

}