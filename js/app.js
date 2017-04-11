//focus on first input when the page load
window.onload = function() {
    document.getElementById('name').focus();
};

//add another input box when user select 'other'
const jobRole = document.getElementById('title');
const basicInfo = document.getElementById('basic');
jobRole.addEventListener('change', (e) => {
    const jobSelected = jobRole.options[jobRole.selectedIndex].value;
    if(jobSelected === 'other') {
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'other-title';
        input.placeholder = 'Your Job Role';
        basicInfo.appendChild(input);
    }
});

//change color option dropdown based on design selection
const design = document.getElementById('design');
const color = document.getElementById('color');
design.addEventListener('change', (e) => {
    const designDropdown = design.options[design.selectedIndex].value;
    if (designDropdown === 'js puns'){
        for (i=3; i<6; i++){
            color.options[3].selected = 'selected';
            color.options[i].style.display = 'none';
            color.options[i-3].style.display = 'inline';
        }
    }
    else if (designDropdown === 'heart js'){
         for (i=0; i<3; i++){
            color.options[0].selected = 'selected';
            color.options[i].style.display = 'none';
            color.options[i+3].style.display = 'inline';
        }
    }
});

//register for activities
const activities = document.getElementById('activities');
activities.addEventListener('change',(e) => {
    
    const checkbox = event.target;
    const checked = checkbox.checked;
    const main = document.getElementById("all");
    const framework = document.getElementById("js-frameworks");
    const libs = document.getElementById("js-libs");
    const express = document.getElementById("express");
    const node = document.getElementById("node");
    const build = document.getElementById("build-tools");
    const npm = document.getElementById("npm");
    var totalAmount = 0;
    
    if(framework.checked == true){
            express.disabled = true;
            totalAmount += 100;
            console.log(totalAmount);
        }
    else if(libs.checked == true){
            node.disabled = true;
            totalAmount += 100;
        }
    else if(express.checked == true){
            totalAmount += 100;
        }
    else if(node.checked == true){
            totalAmount += 200;
        }
    else if(main.checked == true){
            totalAmount += 200;
        }
    else if(npm.checked == true){
            totalAmount += 100;
        }
    else if(build.checked == true){
            totalAmount += 100;
        }
    

    if(framework.checked == false){
            express.disabled = false;
            totalAmount -= 100;
        }
    else if(libs.checked == false){
            node.disabled = false;
            totalAmount -= 100;
        }
    else if(express.checked == false){
            framework.disabled = false;
            totalAmount -= 100;
        }
    else if(node.checked == false){
            libs.disabled = false;
            totalAmount -= 100;
        }
    else if(main.checked == true){
            totalAmount -= 200;
        }
    else if(npm.checked == true){
            totalAmount -= 100;
        }
    else if(build.checked == true){
            totalAmount -= 100;
        }
    
    console.log(totalAmount);
    var x = "Total: $" + totalAmount; 
    document.getElementById("total").innerHTML = x;
    
});


//initial display for payment because credit card option is preselected.
const payment= document.getElementById('payment');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const creditCard = document.getElementById('credit-card');
payment.options[1].selected = 'selected';
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//change payment information based on selection
payment.addEventListener('change', (e) => {
    
    const paymentSelected = payment.options[payment.selectedIndex].value;
    
    if (paymentSelected === 'paypal'){
        paypal.style.display = 'inline';
        creditCard.style.display = 'none';
    }
    else if (paymentSelected === 'bitcoin'){
        bitcoin.style.display = 'inline';
        creditCard.style.display = 'none';
    }
    else if (paymentSelected === 'creditCard')
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
});


                        

              