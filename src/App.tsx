import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "./contexts/LanguageContext";
import { AppSidebar } from "./components/AppSidebar";
import { ChatDialog } from "./components/ChatDialog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Launchpad from "./pages/Launchpad";
import Assets from "./pages/Assets";
import Dashboard from "./pages/Dashboard";
import { useMemo } from "react";

const App = () => {
  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        retry: 1,
      },
    },
  }), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" enableSystem>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <SidebarProvider>
                <div className="min-h-screen flex flex-col w-full">
                  <AppSidebar />
                  <div className="flex-1 flex flex-col">
                    <Navbar />
                    <main className="flex-1 pt-16">
                      <SidebarTrigger className="fixed top-3 left-4 z-50" />
                      <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/launchpad" element={<Launchpad />} />
                        <Route path="/assets" element={<Assets />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                  <ChatDialog />
                </div>
              </SidebarProvider>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;