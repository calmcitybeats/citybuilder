import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
// Force plugins load with dummy imports (prevent Vite tree-shake)
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - GrapesJS Integration
 * Dummy imports force plugins to load even in production (Vite tree-shake prevention)
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

    // Log plugin load events
    editor.on('plugin:loaded', (p) => {
      console.log('✅ Plugin loaded:', p.id);
    });

    editor.on('plugin:error', (err) => {
      console.error('❌ Plugin error:', err);
    });

    // Log block drag events
    editor.on('block:drag:start', (block) => {
      console.log('👉 Block drag start:', block.label || block.id);
    });

    editor.on('block:drag:stop', (block) => {
      console.log('✅ Block drag stop:', block.label || block.id);
    });

    // Wait for full load and check blocks
    editor.on('load', () => {
      console.log('✅ GrapesJS fully loaded');
      editor.refresh();

      // Delay block check to ensure plugins fully initialized
      setTimeout(() => {
        const allBlocks = editor.BlockManager.getAll();
        const blockIds = allBlocks.map(b => b.id || b.label).slice(0, 10);
        console.log('📦 Blocks available (first 10):', blockIds);
        console.log('📊 Total blocks:', allBlocks.length);
        
        if (allBlocks.length === 0) {
          console.warn('⚠️ No blocks found! Plugins may have failed to load.');
          // Add test block if plugins failed
          console.log('➕ Adding fallback test block...');
          editor.BlockManager.add('test-text', {
            label: '🧪 Test Text Block',
            content: '<p style="color: red; font-weight: bold;">Drag me! (Fallback test block)</p>',
            attributes: { class: 'test-block' },
          });
        }
      }, 1000);
    });

    // Add fallback test block anyway for testing
    editor.BlockManager.add('test-text', {
      label: '🧪 Test Text Block',
      content: '<p style="color: red; font-weight: bold;">Drag me if sidebar still empty!</p>',
      attributes: { class: 'test-block' },
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
