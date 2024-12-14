const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("pong, Server is up and running " + new Date());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is up and running on port 3000");
});
