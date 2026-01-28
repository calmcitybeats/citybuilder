import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

/**
 * Editor Component - GrapesJS Integration
 * Production-safe fixes for plugin loading and canvas rendering
 * 
 * Note: Plugins loaded by string name, not imported as modules
 * This ensures proper plugin resolution in production build
 */
export default function Editor() {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || editorRef.current) return;

    console.log('🚀 Starting GrapesJS init in production...');

    const editor = grapesjs.init({
      container: containerRef.current,
      fromElement: false,
      height: '100vh',
      width: '100%',
      storageManager: false,
      // Plugins as string names - NOT imported as modules
      plugins: [
        'grapesjs-preset-webpage',
        'grapesjs-blocks-basic',
        'grapesjs-plugin-forms',
      ],
    });

    editorRef.current = editor;
    console.log('✅ GrapesJS init called');

    // Listen for plugin load events
    editor.on('plugin:loaded', (pluginName) => {
      console.log('✅ Plugin loaded:', pluginName);
    });

    // Listen for plugin errors
    editor.on('plugin:error', (err) => {
      console.error('❌ Plugin error:', err);
    });

    // Force initial content so canvas is not blank
    editor.setComponents(`
      <div style="padding: 80px; text-align: center; background: #f9fafb; min-height: 100vh;">
        <h1 style="color: #4f46e5; font-size: 3rem; font-weight: bold; margin-bottom: 1.5rem;">
          CityBuilder Editor LIVE di Netlify!
        </h1>
        <p style="font-size: 1.4rem; color: #4b5563; line-height: 1.8; margin-bottom: 2rem;">
          Drag block dari sidebar kiri sekarang.<br/>
          Edit text inline, tambah image/button/columns.<br/>
          Kalau kosong, cek console browser (F12).
        </p>
      </div>
    `);

    // Force initial refresh
    setTimeout(() => {
      editor.refresh();
      console.log('🔄 Initial canvas refresh done');
    }, 100);

    // Wait for editor load event before checking canvas size
    editor.on('load', () => {
      console.log('✅ GrapesJS load event fired');
      
      setTimeout(() => {
        try {
          if (editor && editor.Canvas) {
            const canvasWrapper = editor.Canvas.getWrapper();
            if (canvasWrapper && canvasWrapper.getEl()) {
              const size = canvasWrapper.getEl().getBoundingClientRect();
              console.log('📐 Canvas size after load:', size.width, 'x', size.height);
              if (size.width > 0 && size.height > 0) {
                console.log('✅ Canvas has valid dimensions');
              }
            }
          }
        } catch (e) {
          console.error('❌ Error getting canvas size:', e.message);
        }
      }, 500);
    });

    // ResizeObserver: auto-refresh canvas on container resize
    const resizeObserver = new ResizeObserver(() => {
      if (editorRef.current && editorRef.current.refresh) {
        editorRef.current.refresh();
        console.log('📏 Canvas refreshed on resize');
      }
    });
    resizeObserver.observe(containerRef.current);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw' }} className="bg-gray-50">
      <div 
        ref={containerRef} 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
