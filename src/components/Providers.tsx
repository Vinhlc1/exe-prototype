"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "src/components/ui/toaster";
import { Toaster as Sonner } from "src/components/ui/sonner";
import { TooltipProvider } from "src/components/ui/tooltip";
import { AuthProvider } from "src/contexts/AuthContext";
import { CartProvider } from "src/contexts/CartContext";
import { CollectionProvider } from "src/contexts/CollectionContext";
import { PurchaseHistoryProvider } from "src/contexts/PurchaseHistoryContext";
import { ThemeProvider } from "next-themes";
import { ThemeToggleComponent } from "src/components/theme-toggle";
import { Theme } from "@radix-ui/themes";
import { Suspense } from "react";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
    <Theme>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <CollectionProvider>
            <PurchaseHistoryProvider>
              <TooltipProvider>
                {children}
                <ThemeToggleComponent />
                <Toaster />
                <Sonner />
              </TooltipProvider>
            </PurchaseHistoryProvider>
          </CollectionProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
    </Theme>
    </Suspense>
  );
}