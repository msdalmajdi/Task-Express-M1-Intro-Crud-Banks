let accounts = require("../../accounts");
const express = require("express");
const router = express.Router();

const {
  accountCreate,
  accountList,
  accountUpdate,
  accountDelete,
  accountVips,
} = require("./accounts.controllers");

router.get("/", accountList);

router.post("/", accountCreate);

router.put("/:accountId", accountUpdate);

router.delete("/:accountId", accountDelete);

router.get("/vip", accountVips);

module.exports = router;
