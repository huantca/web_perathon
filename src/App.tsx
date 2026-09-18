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
import PrivacyPolicyCallWallpaper from "./pages/PrivacyPolicyCallWallpaper";
import TermOfUseCallWallpaper from "./pages/TermOfUseCallWallpaper";

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

          {/* Voice Lock Screen: Phone Lock 1*/}
          <Route path="/privacy-policy-voice-lock-screen_1" element={<PrivacyPolicyVoiceLockScreen />} />
          <Route path="/term-of-use-voice-lock-screen_1" element={<TermOfUseVoiceLockScreen />} />
          <Route path="/terms-of-use-voice-lock-screen_1" element={<TermOfUseVoiceLockScreen />} />

          {/* Call Screen: Ringtone & Music (pr006_call_screen_ringtone) */}
          <Route path="/privacy-policy-call-screen-ringtone" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/term-of-use-call-screen-ringtone" element={<TermOfUseCallWallpaper />} />
          <Route path="/terms-of-use-call-screen-ringtone" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen-ringtone/privacy-policy" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/call-screen-ringtone/term-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen-ringtone/terms-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen-ringtone" element={<PrivacyPolicyCallWallpaper />} />

          {/* Call Screen */}
          <Route path="/privacy-policy-call-screen" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/term-of-use-call-screen" element={<TermOfUseCallWallpaper />} />
          <Route path="/terms-of-use-call-screen" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen/privacy-policy" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/call-screen/term-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen/terms-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-screen" element={<PrivacyPolicyCallWallpaper />} />

          {/* Call Wallpaper / Custom Ringtones Call Theme */}
          {/* Path requested: custom-ringtones-call-theme */}
          <Route path="/privacy-policy-custom-ringtones-call-theme" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/term-of-use-custom-ringtones-call-theme" element={<TermOfUseCallWallpaper />} />
          <Route path="/terms-of-use-custom-ringtones-call-theme" element={<TermOfUseCallWallpaper />} />
          <Route path="/custom-ringtones-call-theme/privacy-policy" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/custom-ringtones-call-theme/term-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/custom-ringtones-call-theme/terms-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/custom-ringtones-call-theme" element={<PrivacyPolicyCallWallpaper />} />

          {/* Path alias: call-wallpaper */}
          <Route path="/privacy-policy-call-wallpaper" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/term-of-use-call-wallpaper" element={<TermOfUseCallWallpaper />} />
          <Route path="/terms-of-use-call-wallpaper" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-wallpaper/privacy-policy" element={<PrivacyPolicyCallWallpaper />} />
          <Route path="/call-wallpaper/term-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-wallpaper/terms-of-use" element={<TermOfUseCallWallpaper />} />
          <Route path="/call-wallpaper" element={<PrivacyPolicyCallWallpaper />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
