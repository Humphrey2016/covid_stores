document.getElementById("registrationf").addEventListener("submit", e => {
    e.preventDefault();

var validateRegistration = () => {
    var firstname = document.mydata.firstname;
    var lastname = document.mydata.lastname;
    var company = document.mydata.company;
    var email = document.mydata.email;
    var area_code = document.mydata.area_code;
    var phone_number = document.mydata.phone_number;
    var address = document.mydata.address;
    var idcharacters = document.mydata.idcharacters;
    var idnum = document.mydata.idnum;
    var idcharacterstwo = document.mydata.idcharacterstwo;
    var employee = document.mydata.employee;
    if (firstname.value.length==""){
        firstname.style.border = '5px solid red'
        alert("firstname cannot be left empty")
    }
    if (firstname.value.length < 5 ||firstname.value.length > 12){
        firstname.style.border = '5px solid green'
        alert("firstname should be between 5 and 12")
    }
    var letters = /^[A-Z][a-z,.'-]+(?: [A-Z][a-z,.'-]+)*$/g;
    if (firstname.value.match(letters)) {
        firstname.style.border = '5px solid purple'
        alert("First name should not include number")
    }

    if (lastname.value.length==""){
        lastname.style.border = '5px solid red'
        alert("lastname cannot be left empty")
    }
    if (lastname.value.length < 5 ||lastname.value.length > 12){
        lastname.style.border = '5px solid green'
        alert("lastname should be between 5 and 12")
    }

    if (company.value.length==""){
        company.style.border = '5px solid red'
        alert("Company cannot be left empty")
    }
    if (company.value.length < 5 || company.value.length > 12){
        company.style.border = '5px solid green'
        alert("Company should be between 5 and 20")
    }

    if (area_code.value.length < 1 || area_code.value.length > 5){
        area_code.style.border = '5px solid green'
        alert("Area code should be between 1 and 5")
    }
    if (area_code.value.length==""){
        area_code.style.border = '5px solid red'
        alert("Area code cannot be left empty")
    }
        
    var area = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!area_code.value.match(area)) {
        area_code.style.border = '5px solid blue'
        alert("Area code should only be integers")
    }

    if (phone_number.value.length < 1 || area_code.value.length > 10){
        phone_number.style.border = '5px solid green'
        alert("Phone number should be between 1 and 10")
    }
    if (phone_number.value.length==""){
        phone_number.style.border = '5px solid red'
        alert("Phone number cannot be left empty")
    }
        
    var areatwo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!num.value.match(areatwo)) {
        num.style.border = '5px solid blue'
        alert("Phone number should only be integers")
    }

    var id =  [ A-Za-z];
    if (!firstid.value.match(id)) {
        firstid.style.border = '5px solid blue'
        alert("First 3 ID characters should be in capital letters")
    }
}
validateRegistration();
});