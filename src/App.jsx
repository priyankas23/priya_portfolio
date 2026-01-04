import { Routes, Route } from 'react-router-dom'
import { useRef, useState } from 'react'




import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'

function App() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.volume = 0.25
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div className="app">
      {/* Background layers */}
      <div className="space-bg" />

      <div className="constellations">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="none">
          {/* Constellation 1 */}
          <circle cx="200" cy="150" r="3" />
          <circle cx="260" cy="190" r="2.5" />
          <circle cx="310" cy="160" r="3" />
          <circle cx="360" cy="210" r="2.5" />
          <line x1="200" y1="150" x2="260" y2="190" />
          <line x1="260" y1="190" x2="310" y2="160" />
          <line x1="310" y1="160" x2="360" y2="210" />

          {/* Constellation 2 */}
          <circle cx="650" cy="300" r="3" />
          <circle cx="700" cy="260" r="2.5" />
          <circle cx="760" cy="310" r="3" />
          <circle cx="820" cy="270" r="2.5" />
          <line x1="650" y1="300" x2="700" y2="260" />
          <line x1="700" y1="260" x2="760" y2="310" />
          <line x1="760" y1="310" x2="820" y2="270" />
        </svg>
      </div>

      {/* Navbar */}
      <Navbar playing={playing} toggleMusic={toggleMusic} />

      {/* Persistent audio */}
      <audio ref={audioRef} loop>
        <source src="/music/space-ambient.mp3" type="audio/mpeg" />
      </audio>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
