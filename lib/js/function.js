//create a function to check form for failure.
// function validationFailure(){
//   let firstName = document.forms["formsheet"]["firstname"].value;//i used document.forms to reference back to each particular form i want validated.
//   let lastName = document.forms["formsheet"]["lastname"].value;
//   if(firstName === ""){
//     alert('Please fill this out.');
//   }else if(lastName === "")
//   alert('Please fill this out.');
//   return false;
// }
//not sure why my js isn't responding. *I think its maybe because im specifying the name and not the id.
function validationFailure(){
  //variables for the ids im retreiving
  let fname = document.getElementById("firstname");
  let lname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let company = document.getElementById("company");
  //if statement for if areas arent filled out.
  if(fname.value === "" || lname.value === ""){
     alert('Please fill names out.');
     return false;
  }else if(email.value == null || company.value == null){
    alert('Please check email and company out.');
    return false;
  }
}
//my attempt at using get element by id and giving first and last name label ids.
