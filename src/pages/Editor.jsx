import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import JSZip from 'jszip';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';
import { templates } from '../plugins/templates/blocks.js';

/**
 * Editor Component - GrapesJS Integration
 * Delays block registration until 'load' event with manual sidebar fallback
 * Includes internal template library (Hero, About, Features, CTA, Footer)
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
      blockManager: {
        appendTo: '#blocks-panel',
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

    // Wait for load event - delay all registration
    editor.on('load', () => {
      console.log('✅ Load event fired - registering blocks & categories');

      try {
        // Create Basic category
        editor.Categories.add({ 
          id: 'basic', 
          label: 'Basic Blocks', 
          open: true 
        });
        console.log('✅ Category created: basic');
      } catch (e) {
        console.warn('⚠️ Category creation error:', e.message);
      }

      try {
        // Create Templates category
        editor.Categories.add({ 
          id: 'templates', 
          label: 'Templates', 
          open: true 
        });
        console.log('✅ Category created: templates');
      } catch (e) {
        console.warn('⚠️ Templates category error:', e.message);
      }

      // Register text block
      try {
        editor.BlockManager.add('text-block', {
          label: 'Text',
          content: '<p style="color: #333; padding: 10px;">Text block - double click to edit</p>',
          category: 'basic',
        });
        console.log('✅ Block added: text-block');
      } catch (e) {
        console.warn('⚠️ Text block error:', e.message);
      }

      // Register image block
      try {
        editor.BlockManager.add('image-block', {
          label: 'Image',
          content: '<img src="https://picsum.photos/400/300?random=' + Math.random() + '" alt="Random Image" style="width: 100%; height: auto;">',
          category: 'basic',
        });
        console.log('✅ Block added: image-block');
      } catch (e) {
        console.warn('⚠️ Image block error:', e.message);
      }

      // Register button block
      try {
        editor.BlockManager.add('button-block', {
          label: 'Button',
          content: '<button style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">Click me</button>',
          category: 'basic',
        });
        console.log('✅ Block added: button-block');
      } catch (e) {
        console.warn('⚠️ Button block error:', e.message);
      }

      // Register section block
      try {
        editor.BlockManager.add('section-block', {
          label: 'Section',
          content: '<section style="padding: 40px 20px; background: #f0f0f0; border: 1px dashed #ccc; min-height: 200px;"><h2 style="color: #4f46e5;">Section Title</h2><p>Add your content here</p></section>',
          category: 'basic',
        });
        console.log('✅ Block added: section-block');
      } catch (e) {
        console.warn('⚠️ Section block error:', e.message);
      }

      // Register columns block
      try {
        editor.BlockManager.add('columns-block', {
          label: 'Columns (2)',
          content: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="padding: 20px; background: #f9f9f9; border: 1px dashed #ddd;"><p>Column 1</p></div>
              <div style="padding: 20px; background: #f9f9f9; border: 1px dashed #ddd;"><p>Column 2</p></div>
            </div>
          `,
          category: 'basic',
        });
        console.log('✅ Block added: columns-block');
      } catch (e) {
        console.warn('⚠️ Columns block error:', e.message);
      }

      // Load template blocks from library
      console.log(`📚 Loading ${templates.length} template blocks...`);
      templates.forEach((templateBlock) => {
        try {
          editor.BlockManager.add(templateBlock.id, {
            label: templateBlock.label,
            content: templateBlock.content,
            category: templateBlock.category || 'templates',
          });
        } catch (e) {
          console.warn(`⚠️ Template block error [${templateBlock.id}]:`, e.message);
        }
      });
      console.log(`✅ Templates library loaded: ${templates.length} blocks`);
      const templateCount = templates.filter(t => t.category).reduce((acc, t) => {
        const category = t.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});
      console.log('📊 Template breakdown by category:', templateCount);

      // Force block manager render
      setTimeout(() => {
        try {
          editor.BlockManager.render();
          console.log('✅ BlockManager.render() called');
        } catch (e) {
          console.warn('⚠️ BlockManager.render() error:', e.message);
        }
      }, 200);

      // Force catalog visible
      setTimeout(() => {
        try {
          const frameEl = editor.Canvas.getFrameEl();
          if (frameEl && frameEl.contentDocument) {
            const catalog = frameEl.contentDocument.querySelector('.gjs-blocks-catalog');
            if (catalog) {
              catalog.style.display = 'block !important';
              catalog.style.visibility = 'visible !important';
              console.log('✅ Sidebar catalog forced visible');
            } else {
              console.warn('⚠️ Sidebar catalog not found in frame - using manual panel fallback');
            }
          }
        } catch (e) {
          console.warn('⚠️ Catalog visibility error:', e.message);
        }
      }, 500);

      // Log all blocks
      setTimeout(() => {
        const allBlocks = editor.BlockManager.getAll();
        const blocksList = allBlocks.map(b => `${b.id}: ${b.label}`);
        console.log('📦 All blocks after load:', blocksList);
        console.log('📊 Total blocks: 5 basic + ' + templates.length + ' templates = ' + allBlocks.length);
        console.log('✅ Editor ready for drag & drop');
      }, 800);
    });

    // Log events
    editor.on('plugin:loaded', (p) => {
      console.log('✅ Plugin loaded:', p.id);
    });

    editor.on('plugin:error', (err) => {
      console.error('❌ Plugin error:', err);
    });

    editor.on('block:drag:start', (block) => {
      console.log('👉 Block drag start:', block.label || block.id);
    });

    editor.on('block:drag:stop', (block, ev) => {
      console.log('✅ Block drag stop:', block ? (block.label || block.id) : 'unknown');
    });

    // Test export ZIP button
    setTimeout(() => {
      try {
        const exportBtn = document.createElement('button');
        exportBtn.innerText = '⬇ Export ZIP';
        exportBtn.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 10px 20px;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          z-index: 10000;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        `;
        
        exportBtn.onclick = async () => {
          try {
            console.log('📦 Exporting to ZIP...');
            exportBtn.disabled = true;
            exportBtn.innerText = '⏳ Exporting...';
            
            const zip = new JSZip();
            const html = editor.getHtml();
            const css = editor.getCss();
            
            zip.file('index.html', `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CityBuilder Export</title>
  <style>${css}</style>
</head>
<body>
${html}
</body>
</html>
            `);
            
            zip.file('style.css', css);
            zip.file('README.txt', 'Exported from CityBuilder\\nEdit index.html in your editor\\nAll styles included');
            
            const blob = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'citybuilder-export-' + new Date().toISOString().slice(0, 10) + '.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            console.log('✅ ZIP exported successfully');
            exportBtn.disabled = false;
            exportBtn.innerText = '⬇ Export ZIP';
          } catch (err) {
            console.error('❌ Export error:', err);
            exportBtn.disabled = false;
            exportBtn.innerText = '⬇ Export ZIP';
            alert('Export failed: ' + err.message);
          }
        };
        
        document.body.appendChild(exportBtn);
        console.log('✅ Export ZIP button added to page');
      } catch (err) {
        console.warn('⚠️ Export button setup error:', err.message);
      }
    }, 1000);

    return () => {
      console.log('🧹 Destroying editor...');
      editor.destroy();
    };
  }, []);

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', background: '#ffffff' }}>
      {/* Left sidebar: Block catalog */}
      <div 
        id="blocks-panel" 
        style={{ 
          width: '280px',
          background: '#f8f9fa',
          borderRight: '1px solid #e5e7eb',
          overflowY: 'auto',
          overflowX: 'hidden',
          flexShrink: 0,
          boxSizing: 'border-box'
        }}
      >
        {/* Fallback manual blocks if catalog fails */}
        <div style={{ padding: '12px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: 'bold', color: '#1f2937' }}>
            Basic Blocks
          </h3>
          <div style={{ fontSize: '12px', color: '#6b7280' }}>
            GrapesJS blocks panel loading...
          </div>
        </div>
      </div>

      {/* Main editor container */}
      <div 
        ref={containerRef} 
        style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff'
        }} 
      />
    </div>
  );
}
