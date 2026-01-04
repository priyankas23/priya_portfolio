export default function About() {
  return (
    <section className="page">
      <div className="page-inner about">
     <div className="about-photo">
  <img src="/me.jpg" alt="Priyanka" />
  <span className="orbit" />

  <p className="photo-caption">
    that’s me in bratislava, slovakia!
  </p>
</div>

        <div className="about-text">
          <h1>About Me</h1>

          <p className="greeting">
            <span style={{ animationDelay: '0s' }}>Hi!</span>{' '}
            <span style={{ animationDelay: '0.25s' }}>Hello!</span>{' '}
            <span style={{ animationDelay: '0.5s' }}>こんにちは！</span>{' '}
            I’m Priyanka!
         </p>

          <p>
            I'm a Computer Science major and Japanese Language minor at the University of Texas at Austin! I love making thoughtful, inclusive systems that do social good (with a little whimsy sprinkled in).  
          </p>

          <p>
            My areas of interest include human-computer interaction (especially in an AI/ML context), UI/UX, accessibility engineering, and game design and development-- basically where technology meets humans, whether as a tool or as entertainment.

          </p> 

          <p>
            When I’m not coding, I’m probably listening to k-pop and j-pop, playing rhythm games, getting artsy, kickboxing, stargazing, worshipping Kura Revolving Sushi Bar, or planning my next adventure. I've been to 16 countries, and my goal is to hit all 196 :)
          </p>
          
          <p> you can find me here! </p> 
          <div className="contact-stars">
            <a href="mailto:priyanka.ks2023@gmail.com">email</a>
            <a href="https://github.com/priyankas23" target="_blank">github</a>
            <a href="https://linkedin.com/in/priyanka-sadagopan" target="_blank">linkedin</a>
          </div>
        </div>
      </div>
    </section>
  )
}
