const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Student Form</title>
        </head>
        <body>
            <h1>Student Form</h1>
            <form method="POST" action="/submit">
                <label>Name:</label>
                <input type="text" name="name" required><br><br>
                <label>Age:</label>
                <input type="number" name="age" required><br><br>
                <label>SAP ID:</label>
                <input type="number" name="sapId" required><br><br>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

app.post("/submit", (req, res) => {
    const { name, age, sapId } = req.body;
    res.send(`
        <h1>Student Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>SAP ID:</strong> ${sapId}</p>
        <a href="/">Go back</a>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
