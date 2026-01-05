import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import TestimoniesPage from "./pages/TestimoniesPage";
import SalesPointsPage from "./pages/SalesPointsPage";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Application wrapper with all providers
const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produits" element={<ProductsPage />} />
            <Route path="/temoignages" element={<TestimoniesPage />} />
            <Route path="/points-de-vente" element={<SalesPointsPage />} />
            <Route path="/evenements" element={<EventsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;