const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Simple Calculator</title>
        </head>
        <body>
            <h1>Simple Calculator</h1>
            <form method="GET" action="/calculate">
                <input type="number" name="num1" placeholder="Number 1" required>
                <select name="operation">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select>
                <input type="number" name="num2" placeholder="Number 2" required>
                <button type="submit">Calculate</button>
            </form>
        </body>
        </html>
    `);
});

app.get("/calculate", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    let result;

    switch (req.query.operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
    }

    res.send(`
        <h1>Result: ${result}</h1>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
