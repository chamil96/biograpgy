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
  let fname = document.getElementById("firstName");
  let lname = document.getElementById("lastName");
  if(fname==""){
     alert('Please fill this out.');
     return false;
  }else if(lname==""){
    alert('Please fill this out.');
    return false;
  }
}
//my attempt at using get element by id and giving first and last name label ids.
