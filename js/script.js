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

form.addEventListener("submit",(event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    // Update equation
    const equationString = `Equation: A = 1/2 x ${base} x ${height}`;
    
    // Showing the equation after clicking submit
    equationElement.textContent = equationString;
    equationElement.style.display = "block";

    // Update the result element
    resultElement.textContent = `Result: A = ${area.toFixed(2)}`;

    resultElement.style.display = "block";

    // Calculation
    const calculationString = `$$A = \\frac{1}{2} \times ${base} \times ${height} = ${area}$$`;

    calculationElement.textContent = calculationString;
    calculationElement.style.display = "block";
})
