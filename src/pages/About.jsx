export default function About() {
  return (
    <section className="page">
      <div className="page-inner about">
     <div className="about-photo">
  <img src="/me2.jpg" alt="Priyanka" />
  <span className="orbit" />

  <p className="photo-caption">
    that’s me in london, uk! (my most recent destination)
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
            I'm a 4th year CS major working through the integrated BS/MS program at UT Austin, with a minor in Japanese Language.

            My research and industry interests are centered entirely on Human-Computer Interaction, Human-AI Interaction, Accessible Technology and Social Computing. I care a lot about making sure the technology we design benefits everyone, not just the normalized user. I currently help out Dr. Hanlin Li with Human-Computer Interaction research on the social side with work on track for CHI and CSCW 2027, and I intend on writing my Master's thesis on Human-AI Interaction when it comes to invisible disabilities.

            When I'm not in the classroom, you can find me practicing Japanese, listening to k-pop and j-pop, watching anime, reading, journaling, ice skating, or playing video games. I also am an avid traveler and concert goer! I've been to a lot of concerts and countries, and I hope to continue exploring the world.
          </p>


          <h1> The Fun Section </h1>
          <div className="about-lists">
            <details>
              <summary>Countries I’ve visited</summary>
              <ul>
                {<li> USA (i live here...) </li>}
                {<li> mexico </li>}
                {<li> the bahamas </li>}
                {<li> india (the motherland) </li>}
                {<li> france </li>}
                {<li> italy </li>}
                {<li> vatican city (yes this counts!) </li>}
                {<li> spain </li>}
                {<li> switzerland </li>}
                {<li> hungary </li>}
                {<li> austria </li>}
                {<li> germany </li>}
                {<li> czech republic </li>}
                {<li> slovakia </li>}
                {<li> the united kingdom </li>}
                {<li> coming soon: japan (the dream trip) </li>}
              </ul>
            </details>

            <details>
              <summary>Concerts I’ve been to</summary>
              <ul>
                {<li> Sabrina Carpenter (2016) </li>}
                {<li> Imagine Dragons (2018) </li>}
                {<li> Stray Kids (part 1) (2020) </li>}
                {<li> Halsey (part 1) (2022) </li>}
                {<li> The Rose (part 1) (2023) </li>}
                {<li> Halsey (part 2) (2024) </li>}
                {<li> Halsey (part 3) (2025) </li>}
                {<li> Stray Kids (part 2) (2025) </li>}
                {<li> Ado (2025) </li>}
                {<li> The Rose (part 2) (2025) </li>}
                {<li> Seventee x2 (2025) (vip + best concert so far!) </li>}
                {<li> Del Water Gap (2026) </li>}
                {<li> NMIXX (2026) </li>}
                {<li> Twice x2 (2026)</li>}
                {<li> Miku Expo (2026) </li>}
                {<li> BTS x2 (2026)</li>}
                {<li> MICO (2026)  </li>}
                {<li> Stray Kids (part 3) (2027... hopefully) </li>}
              </ul>
            </details>
          </div>

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
