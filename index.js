const express = require("express");
const app = express();

app.get("/", (req, res) => {
    const message = process.env.mykey;

    res.send(message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`Listening on port ${port}...`); });