const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const CLIENT = path.join(`${__dirname}/../CLIENT/`);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(CLIENT));

// Get request, sending index.html
app.get("/", (req, res) => {
    res.sendFile(`${CLIENT}index.html`);
})

app.listen(port);
console.log('Server started at http://localhost:' + port);