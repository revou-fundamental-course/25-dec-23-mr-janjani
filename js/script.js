{/* <>// MathJax-Script
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script></> */}

const form = document.querySelector("form");
const baseInput = document.getElementById("base");
const heightInput = document.getElementById("height");
const equationElement = document.getElementById("equation");
const resultElement = document.getElementById("result");

form.addEventListener("submit",(event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const base = parseFloat(baseInput.value);
    const height = parseFloat(heightInput.value);

    // Update equation
    const equationString = `Equation: A = 1/2 x ${base} x ${height}`;

    equationElement.textContent = equationString;
    equationElement.style.display = "block";

    // Calculate the area
    const area = (base * height ) / 2;

    // Update the result element
    resultElement.textContent = `Result: A = ${area.toFixed(2)}`;

    resultElement.style.display = "block";
})
