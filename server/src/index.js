const express = require("express");
const routes = require("./features/routes");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

require("./db-connection");
const mongoURI = 'mongodb://localhost:27017/your-database-name';


app.use(express.json());
app.use(cors());

app.use("/api", routes);
app.get("/", (req, res) => {
    res.send("pong, Server is up and running " + new Date());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server is up and running on port 3000");
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const crowdfundRoutes = require('./features/crowdfund/crowdfund.routes');
app.use('/api/crowdfunds', crowdfundRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});