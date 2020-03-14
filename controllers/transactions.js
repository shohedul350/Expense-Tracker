const Transaction = require('../models/Transaction');


//  @desc Get all transactions
//  @route GET/api/v1/transactions
// @access Public
exports.getTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'server Error',
    });
  }
};

//  @desc post transactions
//  @route POST/api/v1/transactions
// @access Public
exports.addTransaction = async (req, res) => {
  try {
    // const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,

    });
  } catch (error) {
    if (error.name === 'validationError') {
      const message = Object.values(error.errors).map((val) => val.massage);
      return res.status(400).json({
        success: false,
        error: message,
      });
    } else {
      return res.sendStatus(500).json({
        success: false,
        error: 'server Error',
      });
    }
  }
};

//  @desc delete transactions
//  @route delete/api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'NO transaction found',
      });
    } else {
      await transaction.remove();
      return res.status(200).json({
        success: true,
        massage: 'succesfull deleted',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'server Error',
    });
  }
};
