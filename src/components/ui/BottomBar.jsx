import { motion } from 'framer-motion';
import { Plus, ZoomIn, ZoomOut } from 'lucide-react';

export default function BottomBar({ zoom, onZoom }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 z-40 shadow-lg"
    >
      {/* Left: Zoom Controls */}
      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onZoom(Math.max(50, zoom - 10))}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300"
          title="Zoom out"
        >
          <ZoomOut size={18} />
        </motion.button>

        <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-sm font-medium text-slate-700 dark:text-slate-200">
          {zoom}%
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onZoom(Math.min(200, zoom + 10))}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300"
          title="Zoom in"
        >
          <ZoomIn size={18} />
        </motion.button>
      </div>

      {/* Center: Add Section (Floating) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
      >
        <Plus size={20} />
        Add Section
      </motion.button>

      {/* Right: Status */}
      <div className="text-sm text-slate-600 dark:text-slate-400">
        All changes saved
      </div>
    </motion.div>
  );
}
