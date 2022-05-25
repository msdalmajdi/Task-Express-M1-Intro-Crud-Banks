const express = require("express");
const accountsRoutes = require("./api/accounts/accounts.routers");
let accounts = require("./accounts");

const app = express();

app.use(express.json()); // this is the middleware
app.use("/api/accounts", accountsRoutes);

const PORT = 8005;
app.listen(PORT, () => {
  console.log("This is running", PORT);
});
