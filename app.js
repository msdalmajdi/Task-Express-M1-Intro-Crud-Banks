const express = require("express");
const accountsRoutes = require("./api/accounts/accounts.routers");

const connectDB = require("./database/connection");

const app = express();

app.use(express.json()); // this is the middleware
app.use("/api/accounts", accountsRoutes);

connectDB();
const PORT = 8005;
app.listen(PORT, () => {
  console.log("This is running", PORT);
});
