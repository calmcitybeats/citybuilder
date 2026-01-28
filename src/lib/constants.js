// CityBuilder Constants
export const APP_NAME = 'CityBuilder'
export const APP_VERSION = '1.0.0'

// GrapesJS Configuration
export const GRAPES_JS_CONFIG = {
  container: '#gjs',
  components: '<div class="text-component">Select a component</div>',
  style: 'body { margin: 0; }',
}

// Supabase Configuration
export const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  key: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
}

// UI Components
export const UI_BREAKPOINTS = {
  mobile: 576,
  tablet: 768,
  desktop: 1024,
}

// Editor Features
export const EDITOR_FEATURES = {
  enableDevTools: true,
  enableTemplates: true,
  enableBlocks: true,
}
