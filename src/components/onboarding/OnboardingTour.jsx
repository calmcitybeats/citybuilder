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
      content: 'Hai! 👋 Selamat datang di CityBuilder! Mau bikin website keren hari ini? Yuk ikuti tur singkat untuk jelajahi semua fitur.',
      placement: 'center',
      locale: { last: 'Selesai', skip: 'Lewati', next: 'Lanjut' },
      disableBeacon: true,
    },
    {
      target: '#blocks-panel',
      content: '📦 Ini sidebar Blocks dengan 25+ template siap pakai. Drag Text, Image, Button, Hero, About, Features, Gallery, Testimonials, CTA, Footer ke canvas. Coba sekarang!',
      placement: 'right',
    },
    {
      target: '.gjs-cv-canvas',
      content: '🎯 Ini canvas utama editor. Drop block di sini, double-click untuk edit text inline, right-click untuk delete, atau drag untuk pindahkan elemen. Sempurna untuk designer no-code!',
      placement: 'bottom',
    },
    {
      target: '.gjs-pn-views-container',
      content: '⚙️ Panel kanan super power tools: Layers (lihat struktur), Styles (ubah warna/font/spacing), Traits (setting component). Customize sesuai brand kamu!',
      placement: 'left',
    },
    {
      target: '#export-zip-btn',
      content: '⬇️ Export ZIP! Klik tombol ini untuk download website HTML + CSS dalam satu file. Langsung bisa upload ke hosting atau edit lebih lanjut. Clean code, siap production!',
      placement: 'top',
    },
    {
      target: 'body',
      content: '🚀 Perfect! Sekarang coba: drag block → edit text → ubah warna → export ZIP → selesai! Kalau ada pertanyaan atau bug, kasih feedback ya. Happy designing! 🎨',
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
          width: 360,
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
          console.log(`✅ Onboarding tour ${data.status} - marking as seen`);
          onFinish();
        }
      }}
    />
  );
}
