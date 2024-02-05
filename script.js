var H1element = document.createElement("H1");
H1element.textContent = "Harsh Khullar";
H1element.style.textAlign = "center";
H1element.style.color = "#A9A9A9"; // or gray
document.body.appendChild(H1element);

var input1 = createInput("Enter the first number");
var input2 = createInput("Enter the second number");

var calculateButton = document.createElement("button");
calculateButton.textContent = "Calculate Sum";
calculateButton.addEventListener("click", calculateSum);

var refreshButton = document.createElement("button");
refreshButton.textContent = "Refresh Page";
refreshButton.addEventListener("click", function () {
    location.reload();
});

// Create a div element to hold the inputs and buttons
var container = document.createElement("div");
container.appendChild(input1);
container.appendChild(input2);
container.appendChild(calculateButton);
container.appendChild(refreshButton);


document.body.appendChild(container);

// Function to create input elements
function createInput(placeholder) {
    var input = document.createElement("input");
    input.placeholder = placeholder;
    return input;
}

// Function to calculate the sum and display it on the page
function calculateSum() {
    try {
        
        var num1 = validateAndParse(input1);
        var num2 = validateAndParse(input2);

        
        var sum = num1 + num2;

       
        showResult(sum);
    } catch (error) {
        
        showError(error, input1);
        showError(error, input2);
    }
}

// Function to validate and parse input value to a number
function validateAndParse(input) {
    var value = parseFloat(input.value);
    if (isNaN(value)) {
        throw new Error("Invalid number");
    }
    return value;
}

// Function to show result on the page
function showResult(result) {
    var existingResult = document.getElementById("resultContainer");
    if (existingResult) {
        existingResult.parentNode.removeChild(existingResult);
    }

    
    var resultParagraph = document.createElement("p");
    resultParagraph.id = "resultContainer";
    resultParagraph.textContent = "Sum: " + result;

   
    container.appendChild(resultParagraph);
}

// Function to show error message and set red border on the input box
function showError(error, input) {
    
    var existingError = input.nextElementSibling;
    if (existingError) {
        existingError.parentNode.removeChild(existingError);
    }

    
    var errorSpan = document.createElement("span");
    errorSpan.textContent = error.message;
    errorSpan.style.color = "red";

    
    input.style.border = "1px solid red";

   
    input.parentNode.insertBefore(errorSpan, input.nextSibling);
}
