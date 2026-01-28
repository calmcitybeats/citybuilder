import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Palette, Settings, MoreHorizontal } from 'lucide-react';

export default function RightPanel({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('layers');

  const tabs = [
    { id: 'layers', label: 'Layers', icon: Layers },
    { id: 'styles', label: 'Styles', icon: Palette },
    { id: 'traits', label: 'Traits', icon: Settings },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: isOpen ? 0 : 400 }}
        exit={{ x: 400 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="fixed right-0 top-16 bottom-16 w-80 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-700 shadow-lg z-30"
      >
        {/* Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-700">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="overflow-y-auto h-full"
        >
          {activeTab === 'layers' && (
            <div className="p-4 space-y-2">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Layers</div>
              <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                <p className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">
                  📄 Page
                </p>
                <div className="pl-4 space-y-1">
                  <p className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">
                    🔲 Section
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'styles' && (
            <div className="p-4 space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Background</label>
                <input
                  type="color"
                  defaultValue="#ffffff"
                  className="w-full h-10 rounded mt-2 cursor-pointer"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Padding</label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {['Top', 'Right', 'Bottom', 'Left'].map(dir => (
                    <input
                      key={dir}
                      type="number"
                      placeholder={dir[0]}
                      className="w-full px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Border Radius</label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  defaultValue="4"
                  className="w-full mt-2"
                />
              </div>
            </div>
          )}

          {activeTab === 'traits' && (
            <div className="p-4 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">ID</label>
                <input
                  type="text"
                  placeholder="element-id"
                  className="w-full mt-1 px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Class</label>
                <input
                  type="text"
                  placeholder="class-names"
                  className="w-full mt-1 px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Link</label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  className="w-full mt-1 px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
