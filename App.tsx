import Header from './components/Header';
import MainContent from './components/MainContent';
import FloatingBackground from './components/FloatingBackground';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0e3f2e] relative overflow-hidden font-sans">
      {/* Layer 0: Floating Background Images */}
      <div className="absolute inset-0 z-0">
        <FloatingBackground />
      </div>

      {/* Layer 1: Gradient Overlay (Green tint over images) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0e3f2e]/85 via-[#092b20]/85 to-[#051d15]/85 pointer-events-none"></div>

      {/* Layer 2: Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Header Bar */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <MainContent />
        </main>
      </div>
    </div>
  );
}

export default App;