
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: "credit" | "debit";
  category?: string;
  merchant?: string;
};

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-ZA', {
    day: 'numeric',
    month: 'short',
  }).format(date);
};

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {transactions.slice(0, 5).map((transaction) => (
            <div
              key={transaction.id}
              className="transaction-item flex items-center justify-between p-4"
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-full",
                  transaction.type === "credit" 
                    ? "bg-green-100" 
                    : "bg-red-100"
                )}>
                  {transaction.type === "credit" ? (
                    <ArrowDownLeft className={cn(
                      "h-4 w-4",
                      "text-green-600"
                    )} />
                  ) : (
                    <ArrowUpRight className={cn(
                      "h-4 w-4",
                      "text-red-600"
                    )} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{transaction.description}</p>
                  <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                </div>
              </div>
              <div className={cn(
                "font-medium",
                transaction.type === "credit" ? "text-green-600" : "text-red-600"
              )}>
                {transaction.type === "credit" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </div>
            </div>
          ))}

          {transactions.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No recent transactions
            </div>
          )}

          {transactions.length > 5 && (
            <div className="p-4 border-t border-gray-100">
              <a href="/transactions" className="text-bank-blue text-sm font-medium hover:underline">
                View all transactions
              </a>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
