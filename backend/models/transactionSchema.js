const { default: mongoose } = require("mongoose");

const transactionSchema = new mongoose.Schema({
    transaction_id: { type: String },
    transaction_type: { type: String },
    transaction_amount: { type: Number },
    transaction_status: { type: String },
    transaction_balance: { type: Number },
    transactor: { type: mongoose.Types.ObjectId, ref: 'Investor' },
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction