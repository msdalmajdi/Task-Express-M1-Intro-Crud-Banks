//let accounts = require("../../accounts");
const Account = require("../../database/models/Account");

exports.accountList = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    console.log("we caught the error accountList ", error);
    res.status(500).json(error);
  }
};

exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    console.log("we caught the error in accountCreate ", error);
    res.status(500).json(error);
  }
};

exports.accountUpdate = async (req, res) => {
  const { accountId } = req.params;

  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await Account.findByIdAndUpdate(accountId, req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.accountDelete = async (req, res) => {
  const { accountId } = req.params;

  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.remove();
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.accountVips = async (req, res) => {
  console.log(req.body.funds);

  try {
    const accounts = await Account.find();
    const vipAccounts = accounts.filter(
      (account) => account.funds > req.body.funds
    );
    res.status(200).json(vipAccounts);
  } catch (error) {
    console.log("we caught the error accountList ", error);
    res.status(500).json(error);
  }
};
