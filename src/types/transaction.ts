
export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: "credit" | "debit";
  category: string;
  merchant: string;
}
