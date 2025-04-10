
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { transactions } from "@/data/mockData";
import { ArrowDownLeft, ArrowUpRight, Calendar, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Transaction } from "@/types/transaction";

const TransactionsPage = () => {
  // Cast transactions to the correct type
  const typedTransactions = transactions as Transaction[];
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>(typedTransactions);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    if (filter === "all") {
      setFilteredTransactions(typedTransactions);
    } else {
      setFilteredTransactions(typedTransactions.filter(t => t.type === filter));
    }
  }, [filter]);
  
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
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600">View and manage your transaction history</p>
      </header>
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="credit">Income</SelectItem>
                <SelectItem value="debit">Expenses</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Date Range</span>
            </Button>
            
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              <span>More Filters</span>
            </Button>
          </div>

          <div className="space-y-0 border rounded-lg overflow-hidden">
            {filteredTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="transaction-item flex items-center justify-between p-4 hover:bg-gray-50"
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
                <div>
                  <div className={cn(
                    "font-medium text-right",
                    transaction.type === "credit" ? "text-green-600" : "text-red-600"
                  )}>
                    {transaction.type === "credit" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </div>
                  <p className="text-xs text-gray-500 text-right">{transaction.category}</p>
                </div>
              </div>
            ))}

            {filteredTransactions.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No transactions found matching your filters.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
