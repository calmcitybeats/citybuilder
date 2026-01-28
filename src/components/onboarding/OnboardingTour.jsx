import Joyride from 'react-joyride';

/**
 * OnboardingTour Component - Guided tour ala Strikingly
 * Introduces users to CityBuilder GrapesJS editor on first visit
 * Uses localStorage to track if tour has been seen
 */
export default function OnboardingTour({ runTour, onFinish }) {
  const steps = [
    {
      target: 'body',
      content: 'Hai! 👋 Selamat datang di CityBuilder. Mau bikin website keren hari ini? Ini tur singkat untuk jelajahi semua fitur.',
      placement: 'center',
      locale: { last: 'Selesai', skip: 'Lewati', next: 'Lanjut' },
      disableBeacon: true,
    },
    {
      target: '#blocks-panel',
      content: '📦 Ini sidebar Blocks. Drag Text, Image, Button, Hero, About, Features, dll ke canvas untuk membangun website yang amazing.',
      placement: 'right',
    },
    {
      target: '.gjs-cv-canvas',
      content: '🎯 Ini canvas utama editor. Drop block di sini, double-click untuk edit text inline, atau drag untuk pindahkan elemen.',
      placement: 'bottom',
    },
    {
      target: '.gjs-pn-views-container',
      content: '⚙️ Panel kanan: Layers untuk lihat struktur halaman, Styles untuk ubah warna/font/spacing, Traits untuk setting component.',
      placement: 'left',
    },
    {
      target: '#export-zip-btn',
      content: '⬇️ Setelah design selesai, klik tombol Export ZIP di sini untuk download website HTML + CSS. Siap upload ke hosting!',
      placement: 'top',
    },
    {
      target: 'body',
      content: '🚀 Oke siap! Sekarang coba drag block ke canvas, edit text, ubah warna, lalu export. Kalau ada yang kurang jelas, kasih tahu ya! Happy designing! 🎨',
      placement: 'center',
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={runTour}
      continuous
      showSkipButton
      showProgress
      scrollToFirstStep
      locale={{
        back: 'Kembali',
        close: 'Tutup',
        last: 'Selesai',
        next: 'Lanjut',
        skip: 'Lewati',
      }}
      styles={{
        options: {
          primaryColor: '#667eea',
          backgroundColor: '#ffffff',
          arrowColor: '#ffffff',
          textColor: '#1f2937',
          width: 350,
          zIndex: 10000,
        },
        tooltip: {
          borderRadius: 8,
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        },
        tooltipContainer: {
          textAlign: 'left',
        },
        button: {
          borderRadius: 4,
          padding: '8px 16px',
          fontSize: '14px',
        },
        buttonNext: {
          backgroundColor: '#667eea',
          color: '#ffffff',
        },
        buttonSkip: {
          color: '#6b7280',
        },
      }}
      callback={(data) => {
        if (data.status === 'finished' || data.status === 'skipped') {
          console.log(`✅ Onboarding tour ${data.status}`);
          onFinish();
        }
      }}
    />
  );
}
