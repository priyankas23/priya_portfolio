import { Link } from 'react-router-dom'

export default function Navbar({ playing, toggleMusic }) {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <div className="nav-logo">Priyanka Sadagopan</div>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/projects">Work</Link>


                    <div className="music-wrapper">
                        <button
                            className={`music-toggle ${playing ? 'playing' : ''}`}
                            onClick={toggleMusic}
                            aria-label="Toggle background music"
                        >
                            🎧
                        </button>
                        <span className="music-label">
                            {playing ? 'playing U by stray kids (lo-fi ver.)' : '(click me!)'}
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
