const express = require('express');
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Prime Number Checker</title>
        </head>
        <body>
            <h1>Prime Number Checker</h1>
            <form id="primeForm">
                <label for="numberInput">Enter a number:</label>
                <input type="number" id="numberInput" required>
                <button type="submit">Check</button>
            </form>
            <p id="result"></p>
            <script>
                document.getElementById('primeForm').onsubmit = function(event) {
                    event.preventDefault(); 
                    const number = parseInt(document.getElementById('numberInput').value);
                    
                    function isPrime(num) {
                        if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
                        for (let i = 2; i <= Math.sqrt(num); i++) {
                            if (num % i === 0) return false;
                        }
                        return true; 
                    }

                    const resultElement = document.getElementById('result');
                    if (isPrime(number)) {
                        resultElement.textContent = number + " is a prime number.";
                    } else {
                        resultElement.textContent = number + " is not a prime number.";
                    }
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
