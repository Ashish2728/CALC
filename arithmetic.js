const display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){

    try{

        let expression = display.value;

        // Convert percentages
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        display.value = eval(expression);

    }
    catch(error){

        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event){

    const key = event.key;

    // Numbers
    if("0123456789".includes(key)){
        append(key);
    }

    // Operators
    else if(["+", "-", "*", "/", ".", "(", ")"].includes(key)){
        append(key);
    }

    // Calculate
    else if(key === "Enter"){
        calculate();
    }

    // Delete last character
    else if(key === "Backspace"){
        backspace();
    }

    // Clear display
    else if(key === "Escape"){
        clearDisplay();
    }
});