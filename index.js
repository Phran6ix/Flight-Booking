const express = require("express");
const { json } = require("express");
const routes = require("./routes/flightRoute");

const app = express();

app.use(json());

app.use("/api/v1/flight", routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
