import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - GrapesJS Integration
 * Production-safe fixes for blank canvas issue on Netlify
 */
export default function Editor() {
  const containerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || editorRef.current) return;

    const editor = grapesjs.init({
      container: containerRef.current,
      fromElement: false,
      height: '100vh',
      width: '100%',
      storageManager: false,
      plugins: [
        'grapesjs-preset-webpage',
        'grapesjs-blocks-basic',
        'grapesjs-plugin-forms',
      ],
    });

    editorRef.current = editor;

    // Force initial content so canvas is not blank in production
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

    // Force refresh to ensure canvas renders
    setTimeout(() => {
      editor.refresh();
    }, 100);

    // ResizeObserver: auto-refresh canvas on container resize
    const resizeObserver = new ResizeObserver(() => {
      if (editorRef.current) {
        editorRef.current.refresh();
      }
    });
    resizeObserver.observe(containerRef.current);

    // Debug log for troubleshooting
    console.log('GrapesJS init di production');
    setTimeout(() => {
      if (editorRef.current && editorRef.current.Canvas) {
        const size = editorRef.current.Canvas.getWrapper().getEl().getBoundingClientRect();
        console.log('Canvas size di live:', size.width, 'x', size.height);
      }
    }, 800);

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
