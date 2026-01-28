import { useEffect, useRef, useState } from 'react';
import grapesjs from 'grapesjs';
import JSZip from 'jszip';
import 'grapesjs/dist/css/grapes.min.css';
import { motion } from 'framer-motion';

// Force plugin imports
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';
const dummy = window.GrapesjsPresetWebpage || window.GrapesjsBlocksBasic || window.GrapesjsPluginForms || undefined;
console.log('🔌 Plugins loaded:', dummy);

import { templates } from '../plugins/templates/blocks.js';
import TopBar from '../components/ui/TopBar';
import BottomBar from '../components/ui/BottomBar';
import Sidebar from '../components/ui/Sidebar';
import RightPanel from '../components/ui/RightPanel';
import CanvasWrapper from '../components/ui/CanvasWrapper';

export default function Editor() {
  const containerRef = useRef(null);
  const editorRef = useRef(null);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('citybuilder-dark-mode') === 'true';
  });
  const [deviceView, setDeviceView] = useState('desktop');
  const [zoom, setZoom] = useState(100);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('citybuilder-dark-mode', isDark);
  }, [isDark]);

  // Initialize GrapesJS
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

    editorRef.current = editor;

    // Set initial content
    editor.setComponents(`
      <div style="padding: 100px; text-align: center; background: #f9fafb;">
        <h1 style="color: #6366f1; font-size: 2.5rem; margin-bottom: 1rem; font-weight: bold;">
          🏗️ CityBuilder Premium
        </h1>
        <p style="font-size: 1.1rem; color: #6b7280; line-height: 1.6;">
          Drag blocks from the sidebar to start building.<br/>
          Edit inline, customize with the right panel, export when ready.
        </p>
      </div>
    `);

    // Wait for load event
    editor.on('load', () => {
      console.log('✅ Load event fired - registering blocks & categories');

      if (editor.Categories && typeof editor.Categories.add === 'function') {
        try {
          editor.Categories.add({ id: 'basic', label: 'Basic Blocks', open: true });
          editor.Categories.add({ id: 'templates', label: 'Templates', open: true });
          console.log('✅ Categories created');
        } catch (e) {
          console.warn('⚠️ Category error:', e.message);
        }
      }

      // Register basic blocks
      ['text-block', 'image-block', 'button-block', 'section-block', 'columns-block'].forEach(blockId => {
        try {
          const blockData = {
            'text-block': {
              label: 'Text',
              content: '<p style="color: #333; padding: 10px;">Text block</p>',
              category: 'basic',
            },
            'image-block': {
              label: 'Image',
              content: '<img src="https://picsum.photos/400/300?random=' + Math.random() + '" style="width: 100%; height: auto;">',
              category: 'basic',
            },
            'button-block': {
              label: 'Button',
              content: '<button style="padding: 10px 20px; background: #6366f1; color: white; border: none; border-radius: 4px; cursor: pointer;">Click me</button>',
              category: 'basic',
            },
            'section-block': {
              label: 'Section',
              content: '<section style="padding: 40px 20px; background: #f0f0f0; min-height: 200px;"><h2 style="color: #6366f1;">Section</h2></section>',
              category: 'basic',
            },
            'columns-block': {
              label: 'Columns',
              content: '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;"><div style="padding: 20px; background: #f9f9f9;">Col 1</div><div style="padding: 20px; background: #f9f9f9;">Col 2</div></div>',
              category: 'basic',
            },
          };
          editor.BlockManager.add(blockId, blockData[blockId]);
          console.log('✅ Block added:', blockId);
        } catch (e) {
          console.warn('⚠️ Block error:', e.message);
        }
      });

      // Load template blocks
      console.log(`📚 Loading ${templates.length} template blocks...`);
      templates.forEach(templateBlock => {
        try {
          editor.BlockManager.add(templateBlock.id, {
            label: templateBlock.label,
            content: templateBlock.content,
            category: templateBlock.category || 'templates',
          });
        } catch (e) {
          console.warn(`⚠️ Template error [${templateBlock.id}]:`, e.message);
        }
      });
      console.log(`✅ Templates loaded: ${templates.length} blocks`);

      setTimeout(() => {
        try {
          editor.BlockManager.render();
          console.log('✅ BlockManager rendered');
        } catch (e) {
          console.warn('⚠️ Render error:', e.message);
        }
      }, 200);
    });

    // Export ZIP handler
    const handleExportZip = async () => {
      try {
        console.log('📦 Exporting to ZIP...');
        const zip = new JSZip();
        const html = editor.getHtml();
        const css = editor.getCss();
        const js = editor.getJs();

        const fullHtml = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CityBuilder Export</title>
  <style>${css}</style>
</head>
<body>
${html}
  <script>${js}</script>
</body>
</html>`;

        zip.file('index.html', fullHtml);
        zip.file('style.css', css);
        if (js && js.trim().length > 0) zip.file('script.js', js);
        zip.file('README.md', `# Website created with CityBuilder\n\nBuilt with ❤️`);

        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'citybuilder-' + new Date().toISOString().slice(0, 10) + '.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        console.log('✅ ZIP exported successfully');
      } catch (err) {
        console.error('❌ Export error:', err);
        alert('Export failed: ' + err.message);
      }
    };

    // Store handler for later use
    window.citybuilderExport = handleExportZip;

    return () => {
      console.log('🧹 Destroying editor...');
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen overflow-hidden">
        {/* Top Bar */}
        <TopBar
          isDark={isDark}
          setIsDark={setIsDark}
          deviceView={deviceView}
          setDeviceView={setDeviceView}
          onExport={() => window.citybuilderExport?.()}
          onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onPanelToggle={() => setIsRightPanelOpen(!isRightPanelOpen)}
        />

        {/* Main Layout */}
        <div className="flex h-screen pt-16 pb-16">
          {/* Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          {/* Canvas Area */}
          <div className="flex-1 hidden lg:flex">
            <CanvasWrapper
              containerRef={containerRef}
              deviceView={deviceView}
              zoom={zoom}
            />
          </div>

          {/* Mobile Canvas */}
          <div className="flex-1 lg:hidden">
            <div className="h-full overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                ref={containerRef}
                className="bg-white dark:bg-slate-900 rounded-xl min-h-full"
              />
            </div>
          </div>

          {/* Right Panel */}
          <RightPanel
            isOpen={isRightPanelOpen}
            onClose={() => setIsRightPanelOpen(false)}
          />
        </div>

        {/* Bottom Bar */}
        <BottomBar zoom={zoom} onZoom={setZoom} />
      </div>
    </div>
  );
}
