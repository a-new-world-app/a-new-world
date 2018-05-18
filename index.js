const express = require("express");

const routes = require("./routes");

app = express();

routes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);