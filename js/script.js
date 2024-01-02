    // Dropdown Function
function toogleDropdown(id) {
    var dropdown = document.getElementById(id);
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
        dropdown.scrollIntoView({behavior: "smooth", block: "end"})
    } else {
        dropdown.style.display = "none";
    }
}

    // Area of Triangle Calculation
const form = document.querySelector("form");
const baseInput = document.getElementById("base");
const heightInput = document.getElementById("height");
const equationElement = document.getElementById("equation");
const calculationElement = document.getElementById("calculation");
const resultElement = document.getElementById("result");
// const warningElement = document.getElementById("warning")

form.addEventListener("submit",(event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    // Calculate the area
    const area = (base * height ) / 2;

    // // Warning Message
    // if (isNaN(area)) {
    //     warningElement.textContent = "Please enter valid numbers for base and height.";
    //     warningElement.style.display = "block";
    //     return; // Prevent further execution
    // }
    
    // Alert Box
    if (isNaN(area)) {
        alert("Please enter valid numbers for base and height.");
        return; // Prevent further execution
    }
    
    // Update equation
    const calculationString = `A = 1/2 x ${base} x ${height}`;

    // Showing the equation after clicking submit    
    calculationElement.textContent = calculationString;
    calculationElement.style.display = "block";
    
    equationElement.style.display = "block";

    // Update the result element
    resultElement.textContent = `A = ${area.toFixed(2)}`;
    resultElement.style.display = "block";    
    resultElement.scrollIntoView({ behavior: "smooth" });
    
    // // Calculation
    // const calculationString = `$$A = \\frac{1}{2} \times ${base} \times ${height} = ${area}$$`;

    // calculationElement.textContent = calculationString;
    // calculationElement.style.display = "block";

    // MathJax.Hub.Queue(["Typeset", MathJax.Hub, "calculationElement"]); // Trigger MathJax re-rendering
})

    // Perimeter of Triangle Calculation
const side1Input = document.getElementById("side1");
const side2Input = document.getElementById("side2");
const side3Input = document.getElementById("side3");
const equatPeri = document.getElementById("equationPerimeter");
const calcPeri = document.getElementById("calculationPerimeter");
const resultPeri = document.getElementById("resultPerimeter");
const buttonPeri = document.getElementById("calculatePerimeter");
    
    // Attach click event to button for perimeter
buttonPeri.addEventListener("click", function(event) {
    event.preventDefault(); //Prevent the page to reload

    // Get input values
    const side1 = parseFloat(side1Input.value);
    const side2 = parseFloat(side2Input.value);
    const side3 = parseFloat(side3Input.value);

    // Calculate the perimeter
    const peri = side1 + side2 + side3;

    // Alert Box
    if (isNaN(peri)) {
        alert("Please enter valid number for each sides of triangle");
        return; //Prevent further execution
    }

    // Update equation
    const calcPeriString = `P = ${side1} + ${side2} + ${side3}`;

        // Showing the equation afyer clicking calculate
    calcPeri.textContent = calcPeriString;
    calcPeri.style.display = "block";
    
    equatPeri.style.display = "block";

    // Update the result perimeter
    resultPeri.textContent = `P = ${peri.toFixed(2)}`;
    resultPeri.style.display = "block";
    resultPeri.scrollIntoView({behavior: "smooth"});
})