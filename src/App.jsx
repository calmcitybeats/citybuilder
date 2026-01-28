import { useState, useEffect } from 'react';
import Joyride from 'react-joyride';
import Editor from './pages/Editor';

const tourSteps = [
  {
    target: 'body',
    content: 'Selamat datang di CityBuilder! 🎨 Mau bikin website keren hari ini?',
    placement: 'center',
    locale: { 
      back: 'Kembali', 
      close: 'Tutup', 
      last: 'Selesai', 
      next: 'Lanjut', 
      skip: 'Lewati' 
    },
  },
  {
    target: '#blocks-panel',
    content: '📦 Ini sidebar Blocks. Drag berbagai block seperti Text, Image, Button, Hero, About, Features ke canvas untuk membangun website.',
    placement: 'right',
  },
  {
    target: '.gjs-cv-canvas',
    content: '🎯 Ini canvas utama editor. Drop block di sini, double click untuk edit text, atau drag untuk pindahkan.',
    placement: 'bottom',
  },
  {
    target: '.gjs-pn-views-container',
    content: '⚙️ Panel kanan: Layers untuk struktur halaman, Styles untuk warna/font/spacing, Traits untuk setting component.',
    placement: 'left',
  },
  {
    target: '#export-zip-btn',
    content: '⬇️ Setelah selesai desain, klik tombol "Export ZIP" untuk download website HTML + CSS. Siap upload ke hosting!',
    placement: 'top',
  },
  {
    target: 'body',
    content: '🚀 Oke siap! Coba drag block, edit text, ubah warna, lalu export. Have fun! Feedback kalau ada yang kurang jelas.',
    placement: 'center',
  },
];

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

  const handleTourEnd = (data) => {
    if (data.status === 'finished' || data.status === 'skipped') {
      console.log(`✅ Tour ${data.status}: marking as seen in localStorage`);
      localStorage.setItem('citybuilder-tour-seen', 'true');
      setRunTour(false);
    }
  };

  return (
    <>
      <Joyride
        steps={tourSteps}
        run={runTour}
        continuous
        showSkipButton
        showProgress
        stepIndex={0}
        callback={handleTourEnd}
        styles={{
          options: {
            primaryColor: '#667eea',
            textColor: '#1f2937',
            backgroundColor: '#ffffff',
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10000,
          },
          tooltip: {
            borderRadius: 8,
            padding: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
          badge: {
            backgroundColor: '#667eea',
            borderRadius: '50%',
          },
        }}
      />
      <Editor />
    </>
  );
}
