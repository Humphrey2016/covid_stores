function puchValidation(){
    customerName = document.salesAgent.customerName
    location = document.salesAgent.location
    tel = document.salesAgent.tel
    emailAdress = document.salesAgent.emailAdress
    NINno = document.salesAgent.NINno
    itemName = document.salesAgent.itemName
    serialNo = document.salesAgent.serialNo
    initialpay = document.salesAgent.initialpay
    nextPay = document.salesAgent.nextPay
    nextAmount = document.salesAgent.nextAmount
    refNo = document.salesAgent.refNo




    var letters = /^[A-Za-z]+$/;
    if(!customerName.value.match(letters)){
        customerName.style.border = "1px solid red"
        // document.getElementById('customerName').customerName="incorrect name"
        // document.getElementById('customerName').style= 'color: red'
        alert('please fill in a correct customer Name')
        return false;
    }
    var numb = /^[A-Za-z]+$/;
        if(!location.value.match(numb)){
        location.style.border = "1px solid red"
        alert('please fill in a correct email address')
        return false;
    }

    var number = /[0-9]*$/
    if(!location.value.match(number)){
        location.style.border = "1px solid red"
        alert('please fill in a correct email address')
        return false;
    }

    

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailadress.value.match(reg)){
        emailadress.style.border = "1px solid red"
        // document.getElementById('emailerr').innerHTML="Wrong email address"
        // document.getElementById('emailerr').style= 'color: red'
        alert('please fill in a correct email address')
        return false;
    }

    // var letter = /^[A-Za-z]+$/;
    // if(!username.value.match(letter)){
    //     username.style.border = "1px solid red"
    //     document.getElementById('usernameerr').innerHTML="Username should not include numbers"
    //     document.getElementById('usernameerr').style= 'color: red'

    //     return false;
    // }

    // var pass = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // if(!password.value.match(pass)){
    //     password.style.border = "1px solid red"
    //     document.getElementById('passworderr').innerHTML="check a password between 7 to 15 characters, contain  one numeric digit and a special character"
    //     document.getElementById('passworderr').style= 'color: red'

    //     return false;
    // }

    // if (password.value = !repassword.value){
    //     repassword.style.border = "1px solid red"
    //     document.getElementById('repassworderr').innerHTML="passwords not matching"
    //     document.getElementById('repassworderr').style= 'color: red'
    //     return false;
    // }

    // var emp = /^^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    // if(!EMPnumber.value.match(emp)){
    //     EMPnumber.style.border = "1px solid red"
    //     document.getElementById('EMPnumbererr').innerHTML="Starting with 34 or 37, length 15 digits"
    //     document.getElementById('EMPnumbererr').style= 'color: red'

    //     return false;
    // }

    // var nin = /^[A-Z]{3}[0-9]{1,8}[A-Z]*$/;
    // if(!NINnumber.value.match(nin)){
    //     NINnumber.style.border = "1px solid red"
    //     document.getElementById('NINnumbererr').innerHTML="Starting with 3 capitals, numbers btn 1to8and ends with a capital letter"
    //     document.getElementById('NINnumbererr').style= 'color: red'

    //     return false;
    //}
    else{
        alert('form submitted successfully')
        return true
        
    }
}