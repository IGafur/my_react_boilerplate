//imports
const express = require("express");
require("dotenv").config();

//server initialization
const app = express();
const port = 3001;
app.listen(3001, () => console.log("server started at " + port));

//routing
app.use("/api/", require("./routes/routes"));
