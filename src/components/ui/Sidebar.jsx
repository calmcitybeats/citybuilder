import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import { templates } from '../../plugins/templates/blocks';

export default function Sidebar({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({
    Hero: true,
    About: false,
    Features: false,
    Gallery: false,
    Testimonials: false,
    CTA: false,
    Footer: false,
  });

  const categories = Object.keys(expandedCategories);
  
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const filteredTemplates = templates.filter(t => 
    t.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedTemplates = categories.reduce((acc, cat) => {
    acc[cat] = filteredTemplates.filter(t => t.category === cat);
    return acc;
  }, {});

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 lg:hidden z-30"
          />
        </>
      )}

      <motion.div
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        exit={{ x: -280 }}
        className="fixed left-0 top-16 bottom-16 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 overflow-y-auto z-30 lg:translate-x-0 lg:left-0"
      >
        {/* Search Bar */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700 z-10">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search blocks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-3 space-y-2">
          {categories.map(category => {
            const categoryBlocks = groupedTemplates[category];
            if (categoryBlocks.length === 0 && searchTerm) return null;

            return (
              <div key={category}>
                {/* Category Header */}
                <motion.button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  <span>{category}</span>
                  <motion.div
                    animate={{ rotate: expandedCategories[category] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                {/* Category Blocks */}
                <AnimatePresence>
                  {expandedCategories[category] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-2 space-y-1.5 mt-1"
                    >
                      {categoryBlocks.map(template => (
                        <motion.div
                          key={template.id}
                          whileHover={{ scale: 1.02 }}
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.effectAllowed = 'copy';
                            e.dataTransfer.setData('template', JSON.stringify(template));
                          }}
                          className="p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-move hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all group"
                        >
                          <div className="flex items-start gap-2.5">
                            <div className="text-xl mt-1 group-hover:scale-110 transition-transform">
                              {template.category === 'Hero' && '🎯'}
                              {template.category === 'About' && 'ℹ️'}
                              {template.category === 'Features' && '⭐'}
                              {template.category === 'Gallery' && '🖼️'}
                              {template.category === 'Testimonials' && '💬'}
                              {template.category === 'CTA' && '🔔'}
                              {template.category === 'Footer' && '🔗'}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                                {template.label}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                {template.category}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Close Button (Mobile) */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300"
        >
          <X size={20} />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
