const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>🛒 Online Shop Deployed via ArgoCD</h1>
        <p>Deployment successful!</p>
    `);
});

app.listen(3000, () => {
    console.log("Online Shop running on port 3000");
});
