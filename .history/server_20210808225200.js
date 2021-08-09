const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Hello There"));

const PORT = 5000;

//process.env.PORT ||

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
