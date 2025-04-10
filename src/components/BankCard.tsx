
import { Card } from "./ui/card";
import { CreditCard, Wifi } from "lucide-react";

interface BankCardProps {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  masked?: boolean;
}

export function BankCard({ 
  cardNumber,
  cardholderName,
  expiryDate,
  masked = false
}: BankCardProps) {
  // Format the card number for display (with masking if needed)
  const formatCardNumber = () => {
    if (masked) {
      return '•••• •••• •••• ' + cardNumber.slice(-4);
    } else {
      return cardNumber.match(/.{1,4}/g)?.join(' ') || cardNumber;
    }
  };

  return (
    <Card className="bank-card relative h-56 w-full rounded-xl p-6 overflow-hidden animate-pulse-slow">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-bank-gold-light via-bank-gold to-bank-gold-dark opacity-90"></div>
      
      {/* Card content */}
      <div className="relative flex flex-col h-full justify-between">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <Wifi className="text-black" size={24} />
            <CreditCard className="text-black" size={24} />
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-black/70">DESA BANK</p>
            <p className="text-xs font-bold text-black">GOLD</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xl tracking-wider font-mono text-black/90 font-bold">
            {formatCardNumber()}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-black/70 mb-1">CARD HOLDER</p>
            <p className="font-medium text-sm text-black uppercase">{cardholderName}</p>
          </div>
          <div>
            <p className="text-xs text-black/70 mb-1">EXPIRES</p>
            <p className="font-medium text-sm text-black">{expiryDate}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
