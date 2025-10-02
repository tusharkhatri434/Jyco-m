
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Certifications from "./pages/Certifications";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { scrollToTopImmediate } from "./utils/scrollToTop";
import { initializeScrollAnimations, ensureContentVisibility, optimizeScrollPerformance } from "./utils/scrollAnimations";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";
import InfraAndQuality from "./pages/InfraAndQuality";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTopImmediate();
    // Optimized initialization with immediate content visibility
    ensureContentVisibility();
    const cleanup = optimizeScrollPerformance();
    initializeScrollAnimations();
    
    return cleanup;
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initial setup with performance optimization
    ensureContentVisibility();
    const cleanup = optimizeScrollPerformance();
    initializeScrollAnimations();
    
    return cleanup;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infra" element={<InfraAndQuality />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
