
export const accounts = [
  {
    id: "acc1",
    name: "eBucks Checking Account",
    balance: 24530.75,
    accountNumber: "62345-87654-129",
    type: "Checking"
  },
  {
    id: "acc2",
    name: "Gold Savings Account",
    balance: 67120.50,
    accountNumber: "62345-87654-241",
    type: "Savings"
  },
  {
    id: "acc3",
    name: "Investment Fund",
    balance: 125000.00,
    accountNumber: "62345-87654-352",
    type: "Investment"
  }
];

export const transactions = [
  {
    id: "tx1",
    description: "Woolworths",
    amount: 856.42,
    date: "2025-04-08T12:45:00Z",
    type: "debit",
    category: "Groceries",
    merchant: "Woolworths"
  },
  {
    id: "tx2",
    description: "Salary Deposit",
    amount: 25000.00,
    date: "2025-04-06T08:30:00Z",
    type: "credit",
    category: "Income",
    merchant: "Employer Co."
  },
  {
    id: "tx3",
    description: "Takealot.com",
    amount: 1299.99,
    date: "2025-04-05T15:20:00Z",
    type: "debit",
    category: "Shopping",
    merchant: "Takealot"
  },
  {
    id: "tx4",
    description: "Petrol - Engen",
    amount: 750.00,
    date: "2025-04-04T19:15:00Z",
    type: "debit",
    category: "Transport",
    merchant: "Engen"
  },
  {
    id: "tx5",
    description: "Netflix Subscription",
    amount: 199.00,
    date: "2025-04-02T06:00:00Z",
    type: "debit",
    category: "Entertainment",
    merchant: "Netflix"
  },
  {
    id: "tx6",
    description: "Interest Earned",
    amount: 83.25,
    date: "2025-04-01T00:00:00Z",
    type: "credit",
    category: "Interest",
    merchant: "SA Rand Bank"
  },
  {
    id: "tx7",
    description: "Pick n Pay",
    amount: 352.68,
    date: "2025-03-30T13:40:00Z",
    type: "debit",
    category: "Groceries",
    merchant: "Pick n Pay"
  }
];

export const cardData = {
  id: "card1",
  cardNumber: "4532123456781234",
  cardholderName: "THABO MOLEFE",
  expiryDate: "04/29",
  cvv: "***",
  type: "Gold Visa"
};
