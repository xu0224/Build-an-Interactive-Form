//focus on first input when the page load
window.onload = function() {
    document.getElementById('name').focus();
};


///START OF ADDING ANOTHER INPUT BOX WHEN USER SELECT 'OTHER'
const jobRole = document.getElementById('title');
const basicInfo = document.getElementById('basic');
jobRole.addEventListener('change', (e) => {
    //get the value of the dropdown that user selects
    const jobSelected = jobRole.options[jobRole.selectedIndex].value;
    //add a text box if user select other
    if(jobSelected === 'other') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'other-title';
        input.placeholder = 'Your Job Role';
        basicInfo.appendChild(input);
    }
});
///END OF ADDING ANOTHER INPUT BOX WHEN USER SELECT 'OTHER'


///START OF CHANGE COLOR OPTION DROPDOWN BASED ON DESIGN SELECTION
const design = document.getElementById('design');
const color = document.getElementById('color');
design.addEventListener('change', (e) => {
    const designDropdown = design.options[design.selectedIndex].value;
    if (designDropdown === 'js puns'){
        //hide the last three color if user choose 'js puns'
        for (i=3; i<6; i++){
            color.options[3].selected = 'selected';
            color.options[i].style.display = 'none';
            color.options[i-3].style.display = 'inline';
        }
    }
    else if (designDropdown === 'heart js'){
        //hide the first three color if user choose 'heat js'
         for (i=0; i<3; i++){
            color.options[0].selected = 'selected';
            color.options[i].style.display = 'none';
            color.options[i+3].style.display = 'inline';
        }
    }
});
///END OF CHANGE COLOR OPTION DROPDOWN BASED ON DESIGN SELECTION


///START OF REGISTER FOR ACTIVITIES
const activities = document.getElementById('activities');
var totalAmount;
activities.addEventListener('change',(e) => {
    totalAmount = 0;
    const checkbox = event.target;
    const checked = checkbox.checked;
    const main = document.getElementById("all");
    const framework = document.getElementById("js-frameworks");
    const libs = document.getElementById("js-libs");
    const express = document.getElementById("express");
    const node = document.getElementById("node");
    const build = document.getElementById("build-tools");
    const npm = document.getElementById("npm");
    //disable other option accordingly when certain option is checked
    if(framework.checked == true){
            express.disabled = true;
            totalAmount += 100;
        }
    if(libs.checked == true){
            node.disabled = true;
            totalAmount += 100;
        }
    if(express.checked == true){
            totalAmount += 100;
            framework.disabled = true;
        }
    if(node.checked == true){
            totalAmount += 200;
            libs.disabled = true;
        }
    if(main.checked == true){
            totalAmount += 200;
        }
    if(npm.checked == true){
            totalAmount += 100;
        }
    if(build.checked == true){
            totalAmount += 100;
        }
    //enable other option accordingly when certain option is unchecked
    if(framework.checked == false){
            express.disabled = false;
        }
    if(libs.checked == false){
            node.disabled = false;
        }
    if(express.checked == false){
            framework.disabled = false;
        }
    if(node.checked == false){
            libs.disabled = false;
        }
    //update the Total based on the selection
    var x = "Total: $" + totalAmount; 
    document.getElementById("total").innerHTML = x;
    
});

///END OF OF REGISTER FOR ACTIVITIES


/// START OF CHANGE PAYMENT INFORMATION BASED ON SELECTION

//initial display for payment because credit card option is preselected.
const payment= document.getElementById('payment');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const creditCard = document.getElementById('credit-card');
//preselect the credit card option
payment.options[1].selected = 'selected';
//hide paypal and bitcoin info 
paypal.style.display = 'none';
bitcoin.style.display = 'none';

payment.addEventListener('change', (e) => {
    
    const paymentSelected = payment.options[payment.selectedIndex].value;
    // when paypal is selected, hide credit card and bitcoin info and show the paypal info
    if (paymentSelected === 'paypal'){
        paypal.style.display = '';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    // when bitcoin is selected, hide credit card and paypal info and show the bitcoin info
    if (paymentSelected === 'bitcoin'){
        bitcoin.style.display = '';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
    }
    // if credit card has been unselect before but be selected again, hide bitcoin and paypal info and show the credit card info
    if (paymentSelected === 'credit_card'){
        creditCard.style.display = '';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
});

/// END OF CHANGE PAYMENT INFORMATION BASED ON SELECTION

/// START OF SUBMIT VALIDATION
const inputName = document.getElementById("name");
const inputMail = document.getElementById("mail");
const inputCard = document.getElementById("cc-num");
const inputZip = document.getElementById("zip");
const inputCvv = document.getElementById("cvv");

//validate name based on if the input string has at least 1 character.
function validation_name(){
    if(inputName.value.length > 0){
        return true;
    }
    else{
        return false;
    }
}

//validate mail based on if it is mail format
function validation_mail(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(inputMail.value)) {
        return false;
 }
    else{
        return true;
    }
}

//validate checkbox based on if total amount is 0, which means no event is checked
function validation_checkbox(){
    if(totalAmount === 0){
        return false;
    }
    else{
        return true;
    }
}

//validate card based on if the length of credit card number input is between 13 to 16, and the input is number
function validation_card(){
    if(inputCard.value.length > 12 && inputCard.value.length < 17 && !isNaN(inputCard.value) ){
        return true;
    }
    else{
        return false;
    }
}

//validate zip based on if the length of zip input is between 5, and the input is number
function validation_zip(){
    if(inputZip.value.length === 5 && !isNaN(inputZip.value)){
        return true;
    }
    else{
        return false;
    }
}

//validate cvv based on if the length of cvv input is between 3, and the input is number
function validation_cvv(){
    if(inputCvv.value.length === 3 && !isNaN(inputCvv.value)){
        return true;
    }
    else{
        return false;
    }
}   

var validation = new Boolean(validation_name() && validation_mail() && validation_checkbox() && validation_card() && validation_zip() && validation_cvv());
const form = document.querySelector('form');

form.addEventListener('submit', (e) => { 
    //when everything pass, 
    if (validation === true){    
        e.preventDefault();
        //hide all of the error indication
        inputName.style.border = "none"; 
        inputMail.style.border = "none"; 
        document.getElementById("activities").style.border = "none"; 
        inputCard.style.border = "none"; 
        inputZip.style.border = "none"; 
        inputCvv.style.border = "none"; 
    }
    //when something goes wrong
    else{
        e.preventDefault();
        //provide error indication for the part that has error, and hide all of the error indication when user fix the error
        if (validation_name() === false){
          inputName.style.border = "thick solid red";  
        }
        if (validation_name() === true){
          inputName.style.border = "none";  
        }
        if (validation_mail() === false){
          inputMail.style.border = "thick solid red"; 
        }
        if (validation_mail() === true){
          inputMail.style.border = "none"; 
        }
        if (validation_checkbox() === false){
            document.getElementById("activities").style.border = "thick solid red";
        }
        if (validation_checkbox() === true){
            document.getElementById("activities").style.border = "none";
        }
        if (validation_card() === false){
            inputCard.style.border = "thick solid red";
        }
        if (validation_card() === true){
            inputCard.style.border = "none";
        }
        if (validation_zip() === false){
            inputZip.style.border = "thick solid red";
        }
        if (validation_zip() === true){
            inputZip.style.border = "none";
        }
        if (validation_cvv() === false){
            inputCvv.style.border = "thick solid red";
        }
        if (validation_cvv() === true){
            inputCvv.style.border = "none";
        }
    }
});
/// END OF SUBMIT VALIDATION
                        

              