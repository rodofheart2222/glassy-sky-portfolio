import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Documentation from './pages/Documentation'
import Navbar from './components/Navbar'
import { Toaster } from '@/components/ui/toaster'

function App() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 4 + 'px'
      cursor.style.top = e.clientY - 4 + 'px'
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/docs" element={<Documentation />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App