{/* <>// MathJax-Script
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script></> */}
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
