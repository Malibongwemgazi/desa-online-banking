
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  CreditCard, 
  BarChart3, 
  Send, 
  Settings, 
  LogOut, 
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type NavItemProps = {
  to: string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
};

const NavItem = ({ to, icon: Icon, label, onClick }: NavItemProps) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => cn(
      "flex items-center gap-4 px-4 py-3 rounded-lg transition-all",
      isActive 
        ? "bg-bank-blue text-white" 
        : "text-gray-600 hover:bg-bank-gray"
    )}
    onClick={onClick}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const MainNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleMenu}
          className="bg-white shadow-md"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Navigation sidebar - desktop always shown, mobile conditional */}
      <aside className={cn(
        "fixed inset-y-0 left-0 bg-white border-r border-gray-100 p-4 flex flex-col z-40 transition-transform duration-300 ease-in-out",
        "md:translate-x-0 md:w-64",
        mobileMenuOpen ? "translate-x-0 w-64" : "-translate-x-full"
      )}>
        <div className="flex items-center mb-8 px-2">
          <div className="bg-bank-blue rounded-lg p-2 mr-3">
            <span className="text-white font-bold text-xl">SA</span>
          </div>
          <h1 className="font-bold text-xl text-bank-blue">SA Rand Banking</h1>
        </div>
        
        <nav className="flex-1 space-y-1">
          <NavItem to="/" icon={Home} label="Dashboard" onClick={closeMenu} />
          <NavItem to="/cards" icon={CreditCard} label="Cards" onClick={closeMenu} />
          <NavItem to="/transactions" icon={BarChart3} label="Transactions" onClick={closeMenu} />
          <NavItem to="/payments" icon={Send} label="Payments" onClick={closeMenu} />
          <NavItem to="/settings" icon={Settings} label="Settings" onClick={closeMenu} />
        </nav>

        <div className="mt-auto">
          <NavItem to="/logout" icon={LogOut} label="Logout" onClick={closeMenu} />
        </div>
      </aside>

      {/* Overlay to close the mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default MainNavigation;
