import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - Full GrapesJS Integration with Production Fixes
 * Provides a visual website builder with drag-drop blocks, inline editing, and more
 * 
 * Production Fixes:
 * - Uses useRef on actual DOM element (reliable in production mode)
 * - ResizeObserver to force canvas refresh (fixes blank canvas in static hosts)
 * - Initial content to prevent blank canvas on load
 * - CSS import from grapesjs dist (explicit for production)
 * - Console debug logging for troubleshooting
 */
export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Only initialize once and only if container exists
    if (!editorContainerRef.current || editorRef.current) {
      return;
    }

    console.log('🚀 GrapesJS init in production mode');

    // Initialize GrapesJS with proper container reference
    const editor = grapesjs.init({
      // Use actual DOM element ref instead of id string (more reliable in production)
      container: editorContainerRef.current,
      
      // Start with blank canvas (don't load existing HTML)
      fromElement: false,
      
      // Full viewport sizing
      height: '100%',
      width: '100%',
      
      // Disable storage manager for now (will use Supabase later)
      storageManager: false,
      
      // Load GrapesJS plugins for extended functionality
      plugins: [
        'grapesjs-preset-webpage',      // Basic web elements (containers, sections, etc)
        'grapesjs-blocks-basic',         // Text, image, button, columns blocks
        'grapesjs-plugin-forms',         // Form fields and form elements
      ],
      
      // Plugin specific options
      pluginsOpts: {
        'grapesjs-preset-webpage': {},
        'grapesjs-blocks-basic': {},
        'grapesjs-plugin-forms': {},
      },
    });

    // Store editor instance in ref
    editorRef.current = editor;

    // Set initial content so canvas is not blank in production
    // This prevents the "Please reopen the preview" message
    editor.setComponents(`
      <div style="padding: 100px; text-align: center; font-family: system-ui, sans-serif;">
        <h1 style="color: #6366f1; font-size: 2.5rem; margin-bottom: 20px; font-weight: bold;">
          ✨ CityBuilder - GrapesJS Editor LIVE!
        </h1>
        <p style="color: #666; font-size: 1.1rem; margin-bottom: 30px;">
          Drag blocks dari sidebar kiri untuk mulai membangun website. Jika blank, cek console (F12).
        </p>
        <div style="display: inline-block; padding: 15px 30px; background: #6366f1; color: white; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1rem;">
          👈 Start Building Here
        </div>
      </div>
    `);

    // Log successful initialization
    console.log('✅ GrapesJS Editor initialized successfully');
    console.log('🎨 Editor instance:', editor);

    // Force canvas resize/refresh after a short delay
    // This fixes the blank canvas issue on initial load in production
    setTimeout(() => {
      editor.refresh();
      console.log('🔄 Editor canvas refreshed');
    }, 100);

    // ResizeObserver: automatically refresh canvas when container resizes
    // This is critical for production deployments where container size might change
    if (editorContainerRef.current) {
      const observer = new ResizeObserver(() => {
        if (editorRef.current && editorRef.current.refresh) {
          console.log('📏 Container resized, refreshing canvas');
          editorRef.current.refresh();
        }
      });
      observer.observe(editorContainerRef.current);
      console.log('👀 ResizeObserver attached to canvas container');
    }

    // Debug: Log canvas wrapper size after initialization
    // This helps verify that canvas has proper dimensions (not 0x0)
    setTimeout(() => {
      if (editor.Canvas) {
        const canvasWrapper = editor.Canvas.getWrapper();
        if (canvasWrapper && canvasWrapper.getEl()) {
          const rect = canvasWrapper.getEl().getBoundingClientRect();
          console.log('📐 Canvas wrapper size (MUST be > 0):', {
            width: `${rect.width}px`,
            height: `${rect.height}px`,
            x: `${rect.x}px`,
            y: `${rect.y}px`,
          });
          if (rect.width === 0 || rect.height === 0) {
            console.error('❌ CANVAS SIZE IS ZERO! Check container styles and parent layout.');
          } else {
            console.log('✅ Canvas size is OK');
          }
        }
      }
      console.log('✅ GrapesJS fully initialized and ready for production');
    }, 1000);

    // Cleanup function: Destroy editor on unmount to prevent memory leaks
    return () => {
      if (editorRef.current) {
        console.log('🧹 Destroying GrapesJS instance');
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }} className="bg-gray-100">
      {/* GrapesJS Editor Container - using ref instead of id (more reliable in production) */}
      <div 
        ref={editorContainerRef} 
        style={{ height: '100%', width: '100%' }} 
      />
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
