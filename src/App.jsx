// import Editor from './pages/Editor'

/**
 * Main App Component
 * TEST: Simple gradient to verify Vite/React production build works
 * (Comment Editor import untuk isolate issue)
 */
export default function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
        ✅ CityBuilder LIVE di Netlify!
      </h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Vite + React production build working
      </p>
      <p style={{ fontSize: '1rem', opacity: 0.8 }}>
        If you see this gradient, assets load correctly! 🚀
      </p>
    </div>
  )
}

// TODO: Uncomment Editor when blank screen fixed:
// export default function App() {
//   return <Editor />
// }
