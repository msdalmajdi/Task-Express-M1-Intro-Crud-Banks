let accounts = require("../../accounts");

exports.accountList = (req, res) => {
  res.json(accounts);
};

exports.accountCreate = (req, res) => {
  console.log(req.body);
  const id = accounts[accounts.length - 1].id + 1;
  const newAccount = { id, ...req.body };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

exports.accountUpdate = (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);

  if (foundAccount) {
    for (const key in req.body) {
      foundAccount[key] = req.body[key];
    }
    console.log("Account has been successfully updated", accounts);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account was not Found" });
  }
};

exports.accountDelete = (req, res) => {
  const { accountId } = req.params;
  const foundAccount = accounts.find((account) => account.id === +accountId);

  if (foundAccount) {
    accounts = accounts.filter((account) => account.id !== +accountId);
    console.log("Account has been successfully deleted", accounts);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "Account was not Found" });
  }
};
