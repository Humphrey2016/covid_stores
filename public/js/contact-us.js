function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").Value;
    var phone = document.getElementById("phone").Value;
    var email = document.getElementById("email").Value;
    var message = document.getElementById("message").Value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "15px";

    if(name.length <5){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if(subject.length <5){
        text = "Please Enter Valid Subject";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid phone number";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@")== -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length <=140){
        text = "Please Enter more Than 140 Characters";
        error_message.innerHTML = text;
        return false;        
    }

    alert("Form Submitted Successfully!")
    return true;    
}

