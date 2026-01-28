import { useState, useEffect } from 'react';
import Editor from './pages/Editor';
import OnboardingTour from './components/onboarding/OnboardingTour';

export default function App() {
  const [runTour, setRunTour] = useState(false);

  useEffect(() => {
    // Delay tour start to ensure DOM is fully ready
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('citybuilder-tour-seen');
      if (!hasSeen) {
        console.log('🎯 Starting onboarding tour - first time visitor');
        setRunTour(true);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleTourFinish = () => {
    console.log('✅ Tour completed: marking as seen in localStorage');
    localStorage.setItem('citybuilder-tour-seen', 'true');
    setRunTour(false);
  };

  return (
    <>
      <OnboardingTour runTour={runTour} onFinish={handleTourFinish} />
      <Editor />
    </>
  );
}
