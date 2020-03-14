const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({

  text: {
    type: String,
    trim: true,
    require: [true, 'Please Add some text'],
  },
  amount: {
    type: Number,
    require: [true, 'Please Add a positive or negative number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },


});


const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
