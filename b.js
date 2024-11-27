const express = require('express');
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Button Example</title>
        </head>
        <body>
            <h1>Hello world</h1>
            <button id="myButton">Click me!</button>
            <script>
                document.getElementById('myButton').onclick = function() {
                    window.location.href = 'https://isambucket1234.s3.eu-north-1.amazonaws.com/puzzles.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA796%2FniJVupFBhf%2Fvc9F9EmHiPKohdVWBhCmFVzQJHyECIQCsfRZBLNT3SscoNcLaZ5V1hhC4VNOBuj%2Bfz2ZPJbYFgyrHAwhGEAAaDDQxMjM4MTc2MTg3MyIMa%2FmG8OqtaSiLLCDvKqQDkUeFMlcHAtwq11NbRZGdGLi5aSXhLYj1DlSeu%2Bzy1Utf0G03bgc%2BLFukHlvv9o81D8aTmTUFaqS6nO1Y1Uqi4i0vBdJJEwflye1zI%2FIqXPwcQgVANFyOWFVjljBnJDv19cKttAbG2WCxq23aNB%2BkiFYBX4N9qz4hQr44sGXAp%2B9rQh%2B2iz%2BaLkalV%2F7sDi%2BYvtSO2Dt60E6WvbNOXOI%2Fqq4mR5pzQymxbcxslP523E2sLJWHYpPuvK%2BdnwCNdywCEvu4iDsJy6tP%2Fx%2BHsOhtUK8%2BU60UtHn42PzHnOgzJ7rPJ3ZNipJCWYqmsYfVSflKMcZEwkzLvZjLOFqL83B0an4Uo9CO8c7xTHk%2BxYnHwxFAZvTIyKKL%2BHeaCXMsqun6ZZQofPmzuxuaaajD2erVfirF9fFCopr4LK77evyBHWNN7CTaA83ifpDufwe5UrmCKCa7Xr8MWdi8pmxoov50GqW%2FBKX2EvJ8HXcbwBkZki9yggUYPjPqcg0hXNiKZJmkdhhqqpX8Srf70v6QJRwx2RmCAKQdW1RCHoHhGALNdXO6FjNSMN2HnLoGOuMCxsM9J4Nh3yt0kizFnFcvBaX5LnwXNQJewUH%2FvhZsVHgUNyFhtW9pVf1C6exRG%2FyhfdwsKcN5wwo95MxN0LAFeiiEqjt%2FYu27uVvNbalXPpYytvexRss75m0pKuNTKyMBTcGjYzfvpiEDHbahCJ%2F%2BVNdRxbwi1ltZC%2BhR9RK2pTzv7C7%2BCLPt%2FFBNZwCjZl2Sxz20LSS5ZU2XRq8MpUhfmdUB%2BHTRtyX05NrzbxiuDVIobgluOoYmIAGEtu2EzqArBWJ6fV%2FUiZgxBtA%2FNJlhfUrK4kEX5Rw1ePgiolVgJjmQ7k3PCa0t1DkzJzFupwogmV4VVN5gY%2BU6s023iFJlkrKizwCMOA%2Bhxag9Do7%2FYAbPb7wyflZ2Cm3qsj6X%2BLEvdGzXK09W%2FXP8WsQv%2FEb%2BERAAUrEAzjIuyrvoh11ZmxNWhIM9fOyCpBgLmE2SIRjQz27Q5whKs9haGGdEYOlx8kkJIw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWAA66KFI4RMHRIRC%2F20241127%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241127T125343Z&X-Amz-Expires=120&X-Amz-SignedHeaders=host&X-Amz-Signature=f6a7194935fa53bb5c34271b95f265b5bb424c34a050cf41488cda1bc5c8d154'; // Replace with your desired URL
                }
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
