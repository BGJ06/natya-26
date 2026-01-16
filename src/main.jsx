import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContentProvider } from './context/ContentContext'
import ErrorBoundary from './ErrorBoundary'

console.log("Restoring Full App...");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ContentProvider>
        <App />
      </ContentProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
