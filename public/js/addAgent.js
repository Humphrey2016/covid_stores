// function onFormSubmit(){
//   var formData = readFormData();
// }

// function readFormData() {
//   var formData = {};
//   formData["fullName"] = document.getElementById("fullName").nodeValue;
//   formData["Emailaddress"] = document.getElementById("Emailaddress").nodeValue;
//   formData["age"] = document.getElementById("age").nodeValue;
//   formData["phoneNumber"] = document.getElementById("phoneNumber").nodeValue;
//   formData["EMPnumber"] = document.getElementById("EMPnumber").nodeValue;
//   formData["NINnumber"] = document.getElementById("NINnumber").nodeValue;
//   return formData;
// }

// function insertRecord(data) {
//     var table = document.getElementById("userTable").getElementByTagName('tbody')[0]; 
//     var newRow = table.insertRow(table.length); 
//     cell1 = newRow.insertcell(0);
//     cell1.innerHTML = data.fullName;
//     cell2 = newRow.insertcell(1);
//     cell2.innerHTML = data.Emailaddress;
//     cell3 = newRow.insertcell(2);
//     cell3.innerHTML = data.age;
//     cell4 = newRow.insertcell(3);
//     cell4.innerHTML = data.EMPnumber;
//     cell5 = newRow.insertcell(4);
//     cell5.innerHTML = data.NINnumber;
//     cell1 = newRow.insertcell(5);
//     cell1.innerHTML = '<a>Edit</a> <a>Delete</a>';
// }


var users = [{
}
  ];
  
  $.each(users, function(i, user) {
    appendToUsrTable(user);
  });
  
  $("form").submit(function(e) {
    e.preventDefault();
  });
  
  $("form#addUser").submit(function() {
    var user = {};
    var fullNameInput = $('input[fullName="fullName"]').val().trim();
    var emailAddressInput = $('input[emailAdress="emailAddress"]').val().trim();
    var ageInput = $('input[name="age"]').val().trim();
    var phoneNumberInput = $('input[phoneNumber="phoneNumber"]').val().trim();
    var EMPnumberInput = $('input[EMPnumberName="EMPnumber"]').val().trim();
    var NINnumberInput = $('input[NINnumberName="NINnumber"]').val().trim();  
    if (fullNameInput && emailAddressInput && ageInput&&phoneNumberInput&&EMPnumberInput&&NINnumberInput) {
      $(this).serializeArray().map(function(data) {
        user[data.name] = data.value;
      });
      var lastUser = users[Object.keys(users).sort().pop()];
      user.id = lastUser.id + 1;
  
      addUser(user);
    } else {
      alert("All fields must have a valid value.");
    }
  });
  
  function addUser(user) {
    users.push(user);
    appendToUsrTable(user);
  }
  
  function editUser(id) {
    users.forEach(function(user, i) {
      if (user.id == id) {
        $(".modal-body").empty().append(`
                  <form id="updateUser" action="">
                      <label for="name">fullName</label>
                      <input class="form-control" type="text" name="fullName" value="${user.fullname}"/>
                      <label for="emailAddress">emailAddress</label>
                      <input class="form-control" type="text" name="emailAddress" value="${user.emailAddress}"/>
                      <label for="age">Age</label>
                      <input class="form-control" type="number" name="age" value="${user.age}" min=10 max=100/>
                      <label for="name">phoneNumber</label>
                      <input class="form-control" type="text" name="name" value="${user.phoneNumber}"/> 
                      <label for="name">phoneNumber</label>
                      <input class="form-control" type="text" name="name" value="${user.EMPNumber}"/>
                      <label for="name">phoneNumber</label>
                      <input class="form-control" type="text" name="name" value="${user.NINNumber}"/>                     
              `);
        $(".modal-footer").empty().append(`
                      <button type="button" type="submit" class="btn btn-primary" onClick="updateUser(${id})">Save changes</button>
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  </form>
              `);
      }
    });
  }
  
  function deleteUser(id) {
    var action = confirm("Are you sure you want to delete this user?");
    var msg = "User deleted successfully!";
    users.forEach(function(user, i) {
      if (user.id == id && action != false) {
        users.splice(i, 1);
        $("#userTable #user-" + user.id).remove();
        flashMessage(msg);
      }
    });
  }
  
  function updateUser(id) {
    var msg = "User updated successfully!";
    var user = {};
    user.id = id;
    users.forEach(function(user, i) {
      if (user.id == id) {
        $("#updateUser").children("input").each(function() {
          var value = $(this).val();
          var attr = $(this).attr("name");
          if (attr == "name") {
            user.name = value;
          } else if (attr == "address") {
            user.address = value;
          } else if (attr == "age") {
            user.age = value;
          }
        });
        users.splice(i, 1);
        users.splice(user.id - 1, 0, user);
        $("#userTable #user-" + user.id).children(".userData").each(function() {
          var attr = $(this).attr("name");
          if (attr == "name") {
            $(this).text(user.name);
          } else if (attr == "address") {
            $(this).text(user.address);
          } else {
            $(this).text(user.age);
          }
        });
        $(".modal").modal("toggle");
        flashMessage(msg);
      }
    });
  }
  
  function flashMessage(msg) {
    $(".flashMsg").remove();
    $(".row").prepend(`
          <div class="col-sm-12"><div class="flashMsg alert alert-success alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>${msg}</strong></div></div>
      `);
  }
  
  function appendToUsrTable(user) {
    $("#userTable > tbody:last-child").append(`
          <tr id="user-${user.id}">
              <td class="userData" name="name">${user.name}</td>
              '<td class="userData" name="address">${user.address}</td>
              '<td id="tdAge" class="userData" name="age">${user.age}</td>
              '<td align="center">
                  <button class="btn btn-success form-control" onClick="editUser(${user.id})" data-toggle="modal" data-target="#myModal")">EDIT</button>
              </td>
              <td align="center">
                  <button class="btn btn-danger form-control" onClick="deleteUser(${user.id})">DELETE</button>
              </td>
          </tr>
      `);
  }
  