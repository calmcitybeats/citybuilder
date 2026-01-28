# CityBuilder - Personal Website Builder

A modern, full-stack personal website builder powered by React, Vite, Tailwind CSS, and GrapesJS.

## Features

- **Visual Editor**: Drag-and-drop website builder with GrapesJS
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Components**: Pre-built components for quick website creation
- **Templates**: Ready-made templates for common website types
- **Database**: Supabase integration for data persistence

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + PostCSS
- **Editor**: GrapesJS with preset plugins
- **Database**: Supabase
- **UI Enhancements**: React Joyride for tutorials

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Setup environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linter (if configured)

## Project Structure

```
src/
├── assets/          - Images and icons
├── components/      - React components (ui, editor, preview, onboarding)
├── lib/            - Utilities, constants, and Supabase config
├── pages/          - Page components (Home, Editor, Preview)
├── plugins/        - GrapesJS plugins and templates
├── styles/         - Global and component styles
├── App.jsx         - Main app component
└── main.jsx        - Entry point
```

## Environment Variables

Create `.env.local` with:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues and questions, please open an issue on GitHub.
