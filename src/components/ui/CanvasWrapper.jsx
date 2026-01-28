import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CanvasWrapper({ containerRef, deviceView, zoom }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate editor loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Get canvas width based on device view
  const getCanvasWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 375;
      case 'tablet':
        return 768;
      default:
        return 1920;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(99, 102, 241, .05) 25%, rgba(99, 102, 241, .05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .05) 75%, rgba(99, 102, 241, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(99, 102, 241, .05) 25%, rgba(99, 102, 241, .05) 26%, transparent 27%, transparent 74%, rgba(99, 102, 241, .05) 75%, rgba(99, 102, 241, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Loading State */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
          />
          <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            Loading editor...
          </p>
        </motion.div>
      )}

      {/* Canvas Container */}
      <div
        className="mx-auto p-8 transition-transform duration-200"
        style={{
          width: `${getCanvasWidth()}px`,
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'top center',
        }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          ref={containerRef}
          className="min-h-screen bg-white rounded-xl shadow-2xl overflow-hidden"
        />
      </div>
    </motion.div>
  );
}
