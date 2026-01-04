import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const fullText = "Hi, I’m Priyanka! ᯓ★"
    const [displayText, setDisplayText] = useState("")
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        let index = 0

        const interval = setInterval(() => {
            setDisplayText(fullText.slice(0, index + 1))
            index++

            if (index === fullText.length) {
                clearInterval(interval)
                setAnimate(true)
            }
        }, 80)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="home">
            <div className={`home-content ${animate ? 'animate' : ''}`}>
                <h1 className="intro typing">
                    {displayText}
                    <span className="cursor">|</span>
                </h1>

                <p className="subtitle">
                    Welcome to my portfolio.
                </p>

                <div className="home-actions"><Link to="/projects" className="btn primary">
                    View Work
                </Link>

                    <Link to="/experience" className="btn secondary">
                        Experience
                    </Link>
                </div>
            </div>
        </section>
    )
}
