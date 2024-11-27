const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Even or Odd Checker</title>
        </head>
        <body>
            <h1>Check if a number is even or odd</h1>
            <form method="POST" action="/">
                <input type="number" name="number" required>
                <button type="submit">Check</button>
            </form>
        </body>
        </html>
    `);
});

app.post("/", (req, res) => {
    const number = parseInt(req.body.number);
    const result = (number % 2 === 0) ? "Even" : "Odd";
    res.send(`
        <h1>The number ${number} is ${result}.</h1>
        <a href="/">Check another number</a>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
