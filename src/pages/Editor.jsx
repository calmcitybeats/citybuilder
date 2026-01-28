import { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-preset-webpage';
import 'grapesjs-blocks-basic';
import 'grapesjs-plugin-forms';

/**
 * Editor Component - Full GrapesJS Integration with Canvas Fix
 * Provides a visual website builder with drag-drop blocks, inline editing, and more
 * 
 * Fixes:
 * - Uses useRef on actual DOM element instead of id string
 * - Explicit inline styles for container (height: 100vh, width: 100vw)
 * - Force canvas refresh with setTimeout to prevent "reopen preview" issue
 * - Initial content to prevent blank canvas
 * - Debug logging for canvas size verification
 */
export default function Editor() {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    // Only initialize once and only if container exists
    if (!editorContainerRef.current || editorRef.current) {
      return;
    }

    // Initialize GrapesJS with proper container reference
    const editor = grapesjs.init({
      // Use actual DOM element ref instead of id string
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

    // Set initial content so canvas is not blank
    // This prevents the "Please reopen the preview" message
    editor.setComponents(`
      <div style="padding: 50px; text-align: center; font-family: system-ui, sans-serif;">
        <h1 style="color: #6366f1; font-size: 2.5rem; margin-bottom: 20px;">
          ✨ CityBuilder - GrapesJS Editor Ready!
        </h1>
        <p style="color: #666; font-size: 1.1rem; margin-bottom: 30px;">
          Drag blocks from the left sidebar to start building your website.
        </p>
        <div style="display: inline-block; padding: 15px 30px; background: #6366f1; color: white; border-radius: 8px; cursor: pointer; font-weight: bold;">
          👈 Start Building Here
        </div>
      </div>
    `);

    // Log successful initialization
    console.log('✅ GrapesJS Editor initialized successfully');
    console.log('🎨 Editor instance:', editor);

    // Force canvas resize/refresh after a short delay
    // This fixes the blank canvas issue on initial load
    setTimeout(() => {
      editor.refresh();
      console.log('🔄 Editor canvas refreshed');
    }, 100);

    // Debug: Log canvas wrapper size after initialization
    setTimeout(() => {
      if (editor.Canvas) {
        const canvasWrapper = editor.Canvas.getWrapper();
        if (canvasWrapper && canvasWrapper.getEl()) {
          const rect = canvasWrapper.getEl().getBoundingClientRect();
          console.log('📐 Canvas wrapper size:', {
            width: rect.width,
            height: rect.height,
            x: rect.x,
            y: rect.y,
          });
        }
      }
      console.log('✅ GrapesJS fully initialized and ready');
    }, 500);

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
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }} className="bg-gray-100">
      {/* GrapesJS Editor Container - using ref instead of id */}
      <div 
        ref={editorContainerRef} 
        style={{ height: '100%', width: '100%' }} 
      />
    </div>
  );
}
