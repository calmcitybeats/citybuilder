import { useState, useEffect } from 'react';
import { Moon, Sun, Smartphone, Tablet, Monitor, RotateCcw, RotateCw, Save, Download, Send, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar({ 
  isDark, 
  setIsDark, 
  deviceView, 
  setDeviceView, 
  onExport, 
  onSidebarToggle,
  onPanelToggle 
}) {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleExport = async () => {
    setIsSaving(true);
    try {
      onExport();
    } finally {
      setTimeout(() => setIsSaving(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 border-b border-indigo-500/30 backdrop-blur-sm z-40"
    >
      <div className="flex items-center justify-between h-full px-4 gap-4">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onSidebarToggle}
            className="p-2 hover:bg-indigo-500/30 rounded-lg transition-colors"
          >
            <Menu size={20} className="text-white" />
          </motion.button>
          <div className="text-white font-bold text-lg">🏗️ CityBuilder</div>
        </div>

        {/* Center: Device Preview */}
        <div className="flex items-center gap-2 bg-indigo-500/20 rounded-lg p-1">
          {[
            { id: 'desktop', icon: Monitor, label: 'Desktop' },
            { id: 'tablet', icon: Tablet, label: 'Tablet' },
            { id: 'mobile', icon: Smartphone, label: 'Mobile' },
          ].map(({ id, icon: Icon, label }) => (
            <motion.button
              key={id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setDeviceView(id)}
              className={`p-2 rounded transition-colors ${
                deviceView === id
                  ? 'bg-white/20 text-white'
                  : 'text-indigo-200 hover:text-white'
              }`}
              title={label}
            >
              <Icon size={18} />
            </motion.button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 hover:bg-indigo-500/30 rounded-lg transition-colors text-indigo-100 hover:text-white"
            title="Undo"
          >
            <RotateCcw size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="p-2 hover:bg-indigo-500/30 rounded-lg transition-colors text-indigo-100 hover:text-white"
            title="Redo"
          >
            <RotateCw size={18} />
          </motion.button>

          <div className="w-px h-6 bg-indigo-400/30" />

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 hover:bg-indigo-500/30 rounded-lg transition-colors text-sm font-medium text-indigo-100 hover:text-white flex items-center gap-2"
          >
            <Save size={16} />
            Save
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleExport}
            disabled={isSaving}
            className="px-3 py-1.5 hover:bg-indigo-500/30 rounded-lg transition-colors text-sm font-medium text-indigo-100 hover:text-white flex items-center gap-2 disabled:opacity-50"
          >
            <Download size={16} />
            {isSaving ? 'Exporting...' : 'Export'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1.5 bg-green-500/80 hover:bg-green-600 rounded-lg transition-colors text-sm font-medium text-white flex items-center gap-2"
          >
            <Send size={16} />
            Publish
          </motion.button>

          <div className="w-px h-6 bg-indigo-400/30" />

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-indigo-500/30 rounded-lg transition-colors text-indigo-100 hover:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onPanelToggle}
            className="p-2 hover:bg-indigo-500/30 rounded-lg transition-colors text-indigo-100 hover:text-white"
            title="Toggle Panel"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="15" y1="3" x2="15" y2="21" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
