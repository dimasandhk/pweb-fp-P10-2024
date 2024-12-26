const express = require("express");
const routes = require("./features/routes");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./features/auth/auth.routes');

dotenv.config();

require("./db-connection");
const mongoURI = 'mongodb://localhost:27017/your-database-name';

app.use('/api', authRoutes);
app.use(express.json());
app.use(cors());

app.use("/api", routes);
app.get("/", (req, res) => {
    res.send("pong, Server is up and running " + new Date());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const crowdfundRoutes = require('./features/crowdfun/crowdfund.routes');
app.use('/api/crowdfunds', crowdfundRoutes);

mongoose.connect('mongodb://localhost:27017/crowdfund', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use('/api', authRoutes);