let accounts = require("../../accounts");
const express = require("express");
const router = express.Router();

const {
  accountCreate,
  accountList,
  accountUpdate,
  accountDelete,
} = require("./accounts.controllers");

router.get("/", accountList);

router.post("/", accountCreate);

router.delete("/:accountId", accountDelete);

router.put("/:accountId", accountUpdate);

module.exports = router;
