function validform() {

    var fullname = document.forms["my-form"]["fullname"].value;
    var emailaddress = document.forms["my-form"]["emailaddress"].value;
    var username = document.forms["my-form"]["username"].value;
    var permanentaddress = document.forms["my-form"]["permanentaddress"].value;
    var NINnumber = document.forms["my-form"]["NINnumber"].value;

    if (fullname==null || fullname=="")
    {
        alert("Please Enter Your Full Name");
        return false;
    }else if (emailaddress==null || emailaddress=="")
    {
        alert("Please Enter Your Email Address");
        return false;
    }else if (username==null || username=="")
    {
        alert("Please Enter Your Username");
        return false;
    }else if (permanentaddress==null || permanentaddress=="")
    {
        alert("Please Enter Your Permanent Address");
        return false;
    }else if (NINnumber==null || NINnumber=="")
    {
        alert("Please Enter Your NID Number");
        return false;
    }

}