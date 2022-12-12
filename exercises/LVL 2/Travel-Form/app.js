const form = document.myForm; 
const submit = document.getElementById('submit')

function formAlert(event){
  var firstName = form.elements["fname"].value;
  var lastName = form.elements["lname"].value;
  var age = form.elements["age"].value;
  var gender = form.elements["gender"].value;
  var location = form.elements["country"].value;
  var diet = []
  for(let i = 0; i < form.diet.length; i++){
    if(form.diet[i].checked){
        diet.push(form.diet[i].value)
    }
  }
  alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDietary Restrictions: " + diet);

}
submit.addEventListener("click", formAlert);
