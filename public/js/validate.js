function regValidation() {
    //declaring registration variables by id
    fullname = document.salesAgent.fullname;
    emailaddress = document.salesAgent.emailaddress;
    username = document.salesAgent.username;
    password = document.salesAgent.password;
    repassword = document.salesAgent.repasswordAgain;
    NINnumber = document.salesAgent.NINnumber;
    EMPnumber = document.salesAgent.EMPnumber;
    error_message = error_message
    var text;

//     // validating full Name
    var fullname = /^[A-Za-z]+$/;
    if (!fullname.value.match(fullname)) {

        fullname.style.border = '1px solid red';
        document.getElementById("f").error_message = "First Name of the item should characters only, no numbers";
        alert('First Name of the item should characters only, no numbers');
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        
        return false;
    };

    // validating  email
    var emailaddress = /^[A-Za-z]+$/;
    if (!emailAddress.value.match(emailaddress)) {
        username.style.border = '1px solid red';
        document.getElementById("Fname").innerHTML = "Last Name of the item should characters only, no numbers";

        return false;
    }


    // validatin Agents NIN number
    var carNum = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/    ;
    if (!NINnumber.value.match(carNum)) {
        NINnumber.style.border = '1px solid red';
        document.getElementById("NIN").innerHTML = "Enter valid National ID";

        // validating NIN numberlenghth
        if (NINnumber.value.length < 13 || NINnumber.value.length > 13) {
            NINnumber.style.border = '1px solid red';
            return false;
        }
        return false;
    }

    var carNum = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/    ;
    if (!EMPnumber.value.match(carNum)) {
        EMPnumber.style.border = '1px solid red';
        document.getElementById("NIN").innerHTML = "Enter valid National ID";

        // validating NIN numberlenghth
        if (EMPnumber.value.length < 13 || EMPnumber.value.length > 13) {
            EMPnumber.style.border = '1px solid red';
            return false;
        }
        return false;
    }

    var username = /^[A-Za-z]+$/;
    if (!username.value.match(username)) {

        fullname.style.border = '1px solid red';
        document.getElementById("fulname").innerHTML = "First Name of the item should characters only, no numbers";
        alert('First Name of the item should characters only, no numbers');

        return false;
    };

    // Validating Passwords
    if (password.value != repassword.value) {
        password.style.border = '1px solid red';
        repassword.style.border = '1px solid red';
        document.getElementById("pass").innerHTML = "Password Mis-match";
        document.getElementById("repass").innerHTML = "Password Mis-match";

        return false;
    }


}