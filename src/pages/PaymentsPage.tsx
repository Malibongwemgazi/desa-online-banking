
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { accounts } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const PaymentsPage = () => {
  const { toast } = useToast();

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Mode",
      description: "This is a demo. In a real app, this would process your payment.",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
        <p className="text-gray-600">Send money and pay bills</p>
      </header>
      
      <Tabs defaultValue="send" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="send">Send Money</TabsTrigger>
          <TabsTrigger value="pay">Pay Bills</TabsTrigger>
          <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
        </TabsList>
        
        <TabsContent value="send">
          <Card>
            <CardHeader>
              <CardTitle>Send Money</CardTitle>
              <CardDescription>
                Transfer funds to another account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="from-account">From Account</Label>
                    <Select defaultValue={accounts[0].id}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map(account => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name} - {account.accountNumber}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="recipient">Recipient</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select recipient" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Add New Recipient</SelectItem>
                        <SelectItem value="demo1">John Doe - ABSA</SelectItem>
                        <SelectItem value="demo2">Cape Town Municipality</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input id="account-number" placeholder="Enter account number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="amount">Amount (ZAR)</Label>
                    <Input id="amount" type="number" step="0.01" placeholder="0.00" />
                  </div>
                  
                  <div>
                    <Label htmlFor="reference">Your Reference</Label>
                    <Input id="reference" placeholder="e.g. April Rent" />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-bank-blue">
                  Send Payment
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pay">
          <Card>
            <CardHeader>
              <CardTitle>Pay Bills</CardTitle>
              <CardDescription>
                Pay bills and invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bill-type">Bill Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bill type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electricity">Electricity</SelectItem>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="internet">Internet</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="bill-account">Bill Account Number</Label>
                    <Input id="bill-account" placeholder="Enter bill account number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="from-account-bill">From Account</Label>
                    <Select defaultValue={accounts[0].id}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                      <SelectContent>
                        {accounts.map(account => (
                          <SelectItem key={account.id} value={account.id}>
                            {account.name} - {account.accountNumber}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="bill-amount">Amount (ZAR)</Label>
                    <Input id="bill-amount" type="number" step="0.01" placeholder="0.00" />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-bank-blue">
                  Pay Bill
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="beneficiaries">
          <Card>
            <CardHeader>
              <CardTitle>Manage Beneficiaries</CardTitle>
              <CardDescription>
                Add and manage payment recipients
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">
                  You haven't added any beneficiaries yet
                </p>
                <Button className="bg-bank-blue">
                  Add New Beneficiary
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsPage;
