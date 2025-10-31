"use client";
import { Moon, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { useCart } from "src/contexts/CartContext";
import { useAuth } from "src/contexts/AuthContext";
import { useState } from "react";
import LoginModal from "src/components/LoginModal";

const Navbar = () => {
  const router = useRouter();
  const { getCartCount } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const cartCount = getCartCount();

  return (
    <>
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Moon className="w-8 h-8 text-primary" />
            <span className="text-2xl font-serif font-bold text-gradient-gold">Pandoora</span>
          </Link>

          <div className="flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/marketplace" className="text-foreground hover:text-primary transition-colors">Cards</Link>
            <Link href="/collection" className="text-foreground hover:text-primary transition-colors">Collection</Link>
            <Link href="/auctions" className="text-foreground hover:text-primary transition-colors">Auctions</Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => router.push("/checkout")}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Button>
            {isAuthenticated ? (
              <Link href="/profile">
                <Button variant="ghost" size="icon" title={user?.username}>
                  <User className="w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <User className="w-5 h-5" />
              </Button>
            )}
            {isAuthenticated ? (
              <span className="text-sm text-muted-foreground">Hi, {user?.username}</span>
            ) : (
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground btn-glow"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </nav>      <LoginModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
