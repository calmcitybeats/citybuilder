import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

/**
 * Editor Component - GrapesJS Integration
 * Production-safe plugin loading using string names (not ES module imports)
 */
export default function Editor() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log('🚀 Initializing GrapesJS editor...');

    const editor = grapesjs.init({
      container: containerRef.current,
      fromElement: false,
      height: '100%',
      width: '100%',
      storageManager: false,
      plugins: [
        'grapesjs-preset-webpage',
        'grapesjs-blocks-basic',
        'grapesjs-plugin-forms'
      ],
    });

    // Set initial content
    editor.setComponents(`
      <div style="padding: 100px; text-align: center; background: #f9fafb;">
        <h1 style="color: #4f46e5; font-size: 2.5rem; margin-bottom: 1rem; font-weight: bold;">
          CityBuilder Editor LIVE di Netlify!
        </h1>
        <p style="font-size: 1.2rem; color: #4b5563; line-height: 1.6;">
          Drag block dari sidebar kiri sekarang.<br/>
          Edit text inline, tambah image/button/columns.
        </p>
      </div>
    `);

    // Log plugin loading events
    editor.on('plugin:loaded', (p) => {
      console.log('✅ Plugin loaded:', p.id);
    });

    editor.on('plugin:error', (err) => {
      console.error('❌ Plugin error:', err);
    });

    // Wait for editor fully load before checking canvas size
    editor.on('load', () => {
      console.log('✅ GrapesJS fully loaded');
      editor.refresh();
      
      setTimeout(() => {
        try {
          if (editor.Canvas) {
            const canvasWrapper = editor.Canvas.getWrapper();
            if (canvasWrapper && canvasWrapper.getEl()) {
              const size = canvasWrapper.getEl().getBoundingClientRect();
              console.log('📐 Canvas size after load:', size.width, 'x', size.height);
              if (size.width > 0 && size.height > 0) {
                console.log('✅ Canvas dimensions valid');
              }
            }
          }
        } catch (e) {
          console.warn('⚠️ Canvas size check failed:', e.message);
        }
      }, 500);
    });

    return () => {
      console.log('🧹 Destroying editor...');
      editor.destroy();
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div 
        ref={containerRef} 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
