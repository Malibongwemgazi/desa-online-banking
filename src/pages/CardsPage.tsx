
import { BankCard } from "@/components/BankCard";
import { cardData } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Shield, EyeOff, Eye } from "lucide-react";
import { useState } from "react";

const CardsPage = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  
  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Cards</h1>
        <p className="text-gray-600">Manage your bank cards</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard size={18} className="text-bank-blue" />
                Gold Visa Card
              </CardTitle>
              <CardDescription>Your primary card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <BankCard 
                  cardNumber={cardData.cardNumber}
                  cardholderName={cardData.cardholderName}
                  expiryDate={cardData.expiryDate}
                  masked={!showCardDetails}
                />
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => setShowCardDetails(!showCardDetails)}
              >
                {showCardDetails ? (
                  <>
                    <EyeOff size={16} />
                    Hide Card Details
                  </>
                ) : (
                  <>
                    <Eye size={16} />
                    Show Card Details
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Card Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <Shield size={16} className="text-bank-blue" />
                    <span>Card Security</span>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <CreditCard size={16} className="text-bank-blue" />
                    <span>Spending Limits</span>
                  </div>
                  <Button variant="outline" size="sm">Set Limits</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="info">Card Info</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle>Card Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Card Number</p>
                      <p className="font-medium">{showCardDetails 
                        ? cardData.cardNumber.match(/.{1,4}/g)?.join(' ')
                        : '•••• •••• •••• ' + cardData.cardNumber.slice(-4)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Cardholder Name</p>
                      <p className="font-medium">{cardData.cardholderName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Expiry Date</p>
                      <p className="font-medium">{cardData.expiryDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Card Type</p>
                      <p className="font-medium">{cardData.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Card Status</p>
                      <p className="font-medium text-green-600">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Card Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm">
                    The last 5 transactions made with this card will appear here.
                  </p>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Full Transaction History
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Card Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">Freeze Card</Button>
                    <Button variant="outline" className="w-full">Report Lost/Stolen</Button>
                    <Button variant="outline" className="w-full">Request Replacement</Button>
                    <Button variant="outline" className="w-full">Change PIN</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
