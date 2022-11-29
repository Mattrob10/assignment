var form = document.getElementByID("arline-form");
var submit = document.getElementByID(submit);
var query = document.querySelector;

function formAlert(){
    var firstName = document.getElementsByName("first-name")[0].value;
    var lastName = document.getElementsByName("last-name")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var genderSelect = document.getElementsByName("gender");
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
};


submit.addEventListener("click", function (event){
    event.preventDefault();
    formAlert();
});