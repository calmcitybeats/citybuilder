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
      content: '🎉 Selamat datang di CityBuilder! Mau bikin website cantik hari ini? Mari kita mulai tur singkat.',
      placement: 'center',
      locale: { last: 'Selesai', skip: 'Lewati', next: 'Lanjut' },
      disableBeacon: true,
    },
    {
      target: '.gjs-blocks-catalog',
      content: '📦 Ini sidebar blocks. Drag & drop text, image, button, columns, forms ke canvas. Coba sekarang!',
      placement: 'right',
    },
    {
      target: '.gjs-cv-canvas',
      content: '✏️ Ini canvas utama. Drop block di sini, double-click untuk edit text inline, right-click untuk delete.',
      placement: 'bottom',
    },
    {
      target: '.gjs-pn-views',
      content: '⚙️ Panel kanan: Layers (struktur DOM), Styles (warna/font/spacing), Traits (setting elemen).',
      placement: 'left',
    },
    {
      target: '.gjs-pn-commands',
      content: '🎨 Top toolbar: Undo/Redo, Preview (mobile/desktop), Settings, Export HTML/ZIP.',
      placement: 'bottom',
    },
    {
      target: 'body',
      content: '✅ Selesai tur! Sekarang coba tambah section baru, drag blocks, edit warna/text. Selamat berkreasi! 🚀',
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
          primaryColor: '#4f46e5',
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
          backgroundColor: '#4f46e5',
          color: '#ffffff',
        },
        buttonSkip: {
          color: '#6b7280',
        },
      }}
      callback={(data) => {
        if (data.status === 'finished' || data.status === 'skipped') {
          onFinish();
        }
      }}
    />
  );
}
