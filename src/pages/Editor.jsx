import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - GrapesJS Integration with Production-Safe Fixes
 * Visual website builder with drag-drop blocks, inline editing
 * 
 * Production Fixes:
 * - useRef for container (not id string - more reliable)
 * - Strong initial content to prevent blank canvas
 * - ResizeObserver for auto-refresh on resize
 * - Debug logs for troubleshooting
 * - Proper cleanup on unmount
 */
export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);

  // Initialize GrapesJS editor
  useEffect(() => {
    // Only initialize once
    if (!editorContainerRef.current || editorRef.current) {
      return;
    }

    console.log('GrapesJS production init OK');

    // Initialize GrapesJS with container ref (not id string)
    const editor = grapesjs.init({
      container: editorContainerRef.current,
      fromElement: false,
      height: '100%',
      width: '100%',
      storageManager: false,
      plugins: [
        'grapesjs-preset-webpage',
        'grapesjs-blocks-basic',
        'grapesjs-plugin-forms',
      ],
      pluginsOpts: {
        'grapesjs-preset-webpage': {},
        'grapesjs-blocks-basic': {},
        'grapesjs-plugin-forms': {},
      },
    });

    editorRef.current = editor;

    // Strong initial content to prevent blank canvas in production
    editor.setComponents(`
      <section style="padding: 100px 20px; text-align: center; background: #f3f4f6; min-height: 100vh;">
        <h1 style="color: #4f46e5; font-size: 3.5rem; margin-bottom: 1rem; font-weight: bold;">
          CityBuilder GrapesJS LIVE!
        </h1>
        <p style="font-size: 1.5rem; color: #374151; line-height: 1.6;">
          Drag &amp; drop blocks dari sidebar kiri sekarang.<br />
          Edit text inline, tambah image/button/columns/forms.<br />
          Kalau kosong, cek console browser.
        </p>
      </section>
    `);

    // Force refresh after short delay
    setTimeout(() => {
      editor.refresh();
    }, 100);

    // Debug: log canvas size after init
    setTimeout(() => {
      if (editorRef.current) {
        const size = editorRef.current.Canvas.getWrapper().getEl().getBoundingClientRect();
        console.log('Canvas size live:', size.width, 'x', size.height);
      }
    }, 500);

    // Cleanup on unmount
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  // ResizeObserver: auto-refresh canvas on container resize
  useEffect(() => {
    if (editorRef.current && editorContainerRef.current) {
      const observer = new ResizeObserver(() => {
        if (editorRef.current) {
          editorRef.current.refresh();
        }
      });
      observer.observe(editorContainerRef.current);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div 
      style={{ 
        height: '100vh', 
        width: '100vw', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#f3f4f6'
      }}
    >
      <div 
        ref={editorContainerRef} 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
