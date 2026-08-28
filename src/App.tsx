import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermOfUse from "./pages/TermOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeleteAccount from "./pages/DeleteAccount";
import PrivacyPolicyRingtone from "./pages/PrivacyPolicyRingtone";
import TermOfUseRingtone from "./pages/TermOfUseRingtone";
import PrivacyPolicyGameBooster from "./pages/PrivacyPolicyGameBooster";
import TermOfUseGameBooster from "./pages/TermOfUseGameBooster";
import PrivacyPolicySillyWallpaper from "./pages/PrivacyPolicySillyWallpaper";
import TermOfUseSillyWallpaper from "./pages/TermOfUseSillyWallpaper";
import PrivacyPolicyNovaBrowser from "./pages/PrivacyPolicyNovaBrowser";
import TermOfUseNovaBrowser from "./pages/TermOfUseNovaBrowser";
import PrivacyPolicyVoiceLockScreen from "./pages/PrivacyPolicyVoiceLockScreen";
import TermOfUseVoiceLockScreen from "./pages/TermOfUseVoiceLockScreen";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/term-of-use" element={<TermOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Ringtone & Download Music 2026 */}
          <Route path="/privacy-policy-ringtone" element={<PrivacyPolicyRingtone />} />
          <Route path="/term-of-use-ringtone" element={<TermOfUseRingtone />} />
          <Route path="/terms-of-use-ringtone" element={<TermOfUseRingtone />} />

          {/* Ultra Smooth: Game Optimizer */}
          <Route path="/privacy-policy-game-booster" element={<PrivacyPolicyGameBooster />} />
          <Route path="/term-of-use-game-booster" element={<TermOfUseGameBooster />} />
          <Route path="/terms-of-use-game-booster" element={<TermOfUseGameBooster />} />

          {/* Silly Wallpaper */}
          <Route path="/privacy-policy-silly-wallpaper" element={<PrivacyPolicySillyWallpaper />} />
          <Route path="/term-of-use-silly-wallpaper" element={<TermOfUseSillyWallpaper />} />
          <Route path="/terms-of-use-silly-wallpaper" element={<TermOfUseSillyWallpaper />} />

          {/* Nova Browser: Fast Private */}
          <Route path="/privacy-policy-nova-browser" element={<PrivacyPolicyNovaBrowser />} />
          <Route path="/term-of-use-nova-browser" element={<TermOfUseNovaBrowser />} />
          <Route path="/terms-of-use-nova-browser" element={<TermOfUseNovaBrowser />} />

          {/* Voice Lock Screen: Phone Lock */}
          <Route path="/privacy-policy-voice-lock-screen" element={<PrivacyPolicyVoiceLockScreen />} />
          <Route path="/term-of-use-voice-lock-screen" element={<TermOfUseVoiceLockScreen />} />
          <Route path="/terms-of-use-voice-lock-screen" element={<TermOfUseVoiceLockScreen />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
