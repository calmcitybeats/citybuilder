import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - GrapesJS Integration
 * Forces sidebar block catalog to render with custom panel
 */
export default function Editor() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log('🚀 Initializing GrapesJS editor with sidebar...');

    const editor = grapesjs.init({
      container: containerRef.current,
      fromElement: false,
      height: '100%',
      width: '100%',
      storageManager: false,
      // Config block manager to use custom panel
      blockManager: {
        appendTo: '#blocks-panel',
        sectors: ['basic'],
      },
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

    // Manual category that will be visible
    editor.Categories.add({ id: 'basic', label: 'Basic Blocks', open: true });

    // Register manual blocks
    editor.BlockManager.add('text-block', {
      label: 'Text',
      content: '<p style="color: #333;">Text block - double click to edit</p>',
      category: 'basic',
      attributes: { class: 'fa fa-text' },
    });

    editor.BlockManager.add('image-block', {
      label: 'Image',
      content: '<img src="https://via.placeholder.com/350x150" alt="Image placeholder" style="width: 100%; height: auto;">',
      category: 'basic',
      attributes: { class: 'fa fa-image' },
    });

    editor.BlockManager.add('button-block', {
      label: 'Button',
      content: '<button style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Click me</button>',
      category: 'basic',
      attributes: { class: 'fa fa-button' },
    });

    editor.BlockManager.add('section-block', {
      label: 'Section',
      content: '<section style="padding: 40px 20px; background: #f0f0f0; border: 1px dashed #ccc; min-height: 200px;"><h2 style="color: #4f46e5;">Section Title</h2><p>Add your content here</p></section>',
      category: 'basic',
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
      category: 'basic',
      attributes: { class: 'fa fa-columns' },
    });

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

    // Force render block manager after load
    editor.on('load', () => {
      console.log('✅ GrapesJS fully loaded');

      // Force render block manager
      setTimeout(() => {
        try {
          editor.BlockManager.render();
          console.log('✅ Force BlockManager.render() called');
        } catch (e) {
          console.warn('⚠️ BlockManager.render() error:', e.message);
        }
      }, 200);

      // Force sidebar catalog visible
      setTimeout(() => {
        try {
          const blocksPanelEl = document.querySelector('#blocks-panel');
          if (blocksPanelEl) {
            console.log('✅ Blocks panel found in DOM');
            blocksPanelEl.style.display = 'block';
            blocksPanelEl.style.visibility = 'visible';
          } else {
            console.warn('⚠️ Blocks panel #blocks-panel not found');
          }

          // Try frame document catalog
          const frameEl = editor.Canvas.getFrameEl();
          if (frameEl && frameEl.contentDocument) {
            const catalog = frameEl.contentDocument.querySelector('.gjs-blocks-catalog');
            if (catalog) {
              catalog.style.display = 'block !important';
              catalog.style.visibility = 'visible !important';
              console.log('✅ Sidebar catalog forced visible in frame');
            } else {
              console.warn('⚠️ Sidebar catalog not found in frame');
            }
          }
        } catch (e) {
          console.warn('⚠️ Catalog visibility error:', e.message);
        }
      }, 500);

      // Log all registered blocks
      setTimeout(() => {
        const allBlocks = editor.BlockManager.getAll();
        const blocksList = allBlocks.map(b => `${b.id}: ${b.label} (cat: ${b.category})`);
        console.log('📦 All blocks registered:', blocksList);
        console.log('📊 Total blocks:', allBlocks.length);
        console.log('✅ Editor ready for drag & drop');
      }, 800);
    });

    return () => {
      console.log('🧹 Destroying editor...');
      editor.destroy();
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', background: '#ffffff' }}>
      {/* Sidebar: Block panel */}
      <div 
        id="blocks-panel" 
        style={{ 
          width: '250px', 
          background: '#f8f9fa', 
          borderRight: '1px solid #e5e7eb',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '10px',
          boxSizing: 'border-box'
        }} 
      />
      
      {/* Main editor container */}
      <div 
        ref={containerRef} 
        style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }} 
      />
    </div>
  );
}
