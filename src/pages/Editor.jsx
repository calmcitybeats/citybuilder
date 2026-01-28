import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

/**
 * Editor Component - GrapesJS Integration
 * Uses dynamic imports + manual block registration to ensure blocks load
 */
export default function Editor() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log('🚀 Initializing GrapesJS editor...');

    // Dynamic import plugins to force load (prevent tree-shake)
    Promise.all([
      import('grapesjs-preset-webpage').then(() => console.log('✅ preset-webpage loaded dynamic')),
      import('grapesjs-blocks-basic').then(() => console.log('✅ blocks-basic loaded dynamic')),
      import('grapesjs-plugin-forms').then(() => console.log('✅ plugin-forms loaded dynamic')),
    ]).catch(err => console.error('❌ Dynamic import error:', err));

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

    // Log plugin events
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

    // Register manual blocks (fallback if plugins fail)
    editor.BlockManager.add('text-block', {
      label: 'Text',
      content: '<p style="color: #333;">Text block - double click to edit</p>',
      category: 'Basic',
      attributes: { class: 'fa fa-text' },
    });

    editor.BlockManager.add('image-block', {
      label: 'Image',
      content: '<img src="https://via.placeholder.com/350x150" alt="Image placeholder" style="width: 100%; height: auto;">',
      category: 'Basic',
      attributes: { class: 'fa fa-image' },
    });

    editor.BlockManager.add('button-block', {
      label: 'Button',
      content: '<button style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Click me</button>',
      category: 'Basic',
      attributes: { class: 'fa fa-button' },
    });

    editor.BlockManager.add('section-block', {
      label: 'Section',
      content: '<section style="padding: 40px 20px; background: #f0f0f0; border: 1px dashed #ccc; min-height: 200px;"><h2 style="color: #4f46e5;">Section Title</h2><p>Add your content here</p></section>',
      category: 'Basic',
      attributes: { class: 'fa fa-th' },
    });

    editor.BlockManager.add('columns-block', {
      label: 'Columns (2)',
      content: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="padding: 20px; background: #f9f9f9; border: 1px dashed #ddd;"><p>Column 1</p></div>
          <div style="padding: 20px; background: #f9f9f9; border: 1px dashed #ddd;"><p>Column 2</p></div>
        </div>
      `,
      category: 'Basic',
      attributes: { class: 'fa fa-columns' },
    });

    // Wait for load event and log all blocks
    editor.on('load', () => {
      console.log('✅ GrapesJS fully loaded');
      editor.refresh();

      setTimeout(() => {
        const allBlocks = editor.BlockManager.getAll();
        const blocksList = allBlocks.map(b => `${b.id}: ${b.label}`);
        console.log('📦 All blocks registered:', blocksList);
        console.log('📊 Total blocks:', allBlocks.length);

        if (allBlocks.length === 0) {
          console.warn('⚠️ No blocks found! Plugins may have failed.');
        } else {
          console.log('✅ Blocks loaded successfully');
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
