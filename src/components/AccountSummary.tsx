
import { Card, CardContent } from "./ui/card";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Account = {
  id: string;
  name: string;
  balance: number;
  accountNumber: string;
  type: string;
};

interface AccountSummaryProps {
  accounts: Account[];
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 2,
  }).format(amount);
};

export function AccountSummary({ accounts }: AccountSummaryProps) {
  const [showBalances, setShowBalances] = useState(true);

  const toggleBalanceVisibility = () => {
    setShowBalances(prev => !prev);
  };

  // Calculate the total balance of all accounts
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Accounts</h2>
        <button 
          onClick={toggleBalanceVisibility}
          className="flex items-center text-sm text-bank-blue gap-1"
        >
          {showBalances ? (
            <>
              <EyeOff size={16} />
              <span>Hide Balances</span>
            </>
          ) : (
            <>
              <Eye size={16} />
              <span>Show Balances</span>
            </>
          )}
        </button>
      </div>

      <Card className="bg-bank-blue text-white">
        <CardContent className="p-6">
          <div className="mb-4">
            <p className="text-sm text-white/80">Total Balance</p>
            <h3 className="text-2xl font-bold mt-1">
              {showBalances ? formatCurrency(totalBalance) : '••••••••'}
            </h3>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {accounts.map(account => (
          <Card key={account.id} className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{account.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {account.accountNumber}
                  </p>
                  <p className="text-xs text-gray-500">{account.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">
                    {showBalances ? formatCurrency(account.balance) : '••••••••'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
