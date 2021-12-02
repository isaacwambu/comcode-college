var objPeople = [
    {
        username : "isaac",
        password : "1234"
    },
    {
        username : "wachira",
        password : "5678"
    },
    {
        username : "ken",
        password : "9123"
    }
];

function runLog(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   for(i=0; i<objPeople.length; i++){
       if(username == objPeople[i].username && password == objPeople[i].password)
       {
           alert(username+ " is logged in");
           window.open("portal.html"); 
           return
       }
   }
   alert("incorrect username or password");
}

function formData(){
    var studentName = document.getElementById("name").value;
    var studentPhone = document.getElementById("phone").value;
    var studentEmail = document.getElementById("email").value;
    var studentAddress = document.getElementById("address").value;
    var studentEmergency = document.getElementById("emergency").value;
    var studentCoursse = document.getElementById("course").value;
    var studentBranch = document.getElementById("branch").value;

    if(studentName === ""){
        alert("fill name field");
    }
    else if(studentPhone === ""){
        alert("fill phone field");
    }
    else if(studentEmail === ""){
        alert("fill email field");
    }
    else if(studentAddress === ""){
        alert("fill address field");
    }
    else if(studentEmergency === ""){
        alert("fill emergency field");
    }
    else if(studentCourse === ""){
        alert("fill course field");
    }else if(studentBranch === ""){
        alert("fill branch field");
    }   
    else{
        alert("Form submission successful!");
    }

}

