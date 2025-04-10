
import { AccountSummary } from "@/components/AccountSummary";
import { BankCard } from "@/components/BankCard";
import { RecentTransactions } from "@/components/RecentTransactions";
import { Button } from "@/components/ui/button";
import { accounts, cardData, transactions } from "@/data/mockData";
import { ArrowRight } from "lucide-react";

const Dashboard = () => {
  // Get current user name
  const userName = "Thabo";
  
  // Get current date for greeting
  const now = new Date();
  const hours = now.getHours();
  
  let greeting;
  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Header section with greeting */}
        <header>
          <h1 className="text-2xl font-bold text-gray-900">
            {greeting}, {userName}
          </h1>
          <p className="text-gray-600">
            {new Date().toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </header>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="flex flex-col h-24 gap-2 bg-white shadow-sm">
            <span className="text-bank-blue text-xs">Send Money</span>
            <ArrowRight size={18} className="text-bank-blue" />
          </Button>
          <Button variant="outline" className="flex flex-col h-24 gap-2 bg-white shadow-sm">
            <span className="text-bank-blue text-xs">Pay Bills</span>
            <ArrowRight size={18} className="text-bank-blue" />
          </Button>
          <Button variant="outline" className="flex flex-col h-24 gap-2 bg-white shadow-sm">
            <span className="text-bank-blue text-xs">Buy Airtime</span>
            <ArrowRight size={18} className="text-bank-blue" />
          </Button>
        </div>

        {/* Account summary section */}
        <AccountSummary accounts={accounts} />

        {/* Bank card */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Card</h2>
          <BankCard 
            cardNumber={cardData.cardNumber}
            cardholderName={cardData.cardholderName}
            expiryDate={cardData.expiryDate}
            masked={true}
          />
        </div>

        {/* Recent transactions */}
        <RecentTransactions transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;
