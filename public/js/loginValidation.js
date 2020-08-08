var validatesignup = () => {
    var username = document.mydata.username;
    var password = document.mydata.password;
    
    if (username.value.length==""){
        username.style.border = '5px solid red'
        alert("Email cannot be left empty")
        return false
    }
    if (password.value.length==""){
        password.style.border = '5px solid green'
        alert("Password cannot be left empty")
        return false
    }

}
