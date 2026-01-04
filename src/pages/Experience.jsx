export default function Experience() {
  return (
    <section className="page">
      <div className="page-inner experience">
        <h1>Experience</h1>

        {/* WORK EXPERIENCE */}
        <section className="exp-section">
          <h2>Work Experience</h2>

          <div className="exp-item">
            <h3>Scene Artist and Programmer</h3>
            <span>UT Austin JapanLab • Jan 2026–Present</span>
            <ul>
              <li>On the <a href="https://www.utjapanlab.com/nagasaki"> A Living Map: Rebuilding Treaty Port Nagasaki </a> project </li>
              <li>Working with narrative and modeling teams to construct maps of the ports of Nagasaki inside the game engine.</li>
              <li>Level design and adjustment for the final game</li>
            </ul>
          </div>

          <div className="exp-item">
            <h3>Undergraduate Course Assistant - CS 311 Discrete Math</h3>
            <span>University of Texas at Austin • Aug 2024–Dec 2025</span>
            <ul>
              <li>Taught fundamental discrete math concepts during discussion sections, including set theory, graph theory, induction and recurrences.</li>
              <li>Held office hours and led study and exam review sessions</li>
              <li>Averaged a 4.7/5 satisfaction rating on student end of semester evals</li>
            </ul>
          </div>

          <div className="exp-item">
            <h3>Associate Software Developer Intern</h3>
            <span>Google - Android Automotive • Summer 2025</span>
            <ul>
              <li>Developed two prototype Android apps with applied machine learning (Backseat Amnesia and Parking Police) on android automotive operating systems to show real applications of machine learning in a car context </li>
              <li>Backseat Amnesia - used image labeling to detect frequently forgotten items in the car (phone, bag, purse) and notifies the driver once the car is in park</li>
              <li>Parking Police - parses text from surrounding parking signs to be able to tell you if you can or cannot park in a parking spot (including accessible parking spaces, no parking with times, and ev parking spaces) </li>
              <li>Demoed both projects in front of 40-50 Android Automotive team members</li>
            </ul>
          </div>

          <div className="exp-item">
            <h3>Associate Software Developer Intern</h3>
            <span>Google - Play Install Performance • Summer 2024</span>
            <ul>
              <li>Worked front end on an internal installer debugger tool to help the google play install performance team debug stuck installs</li>
              <li>Used the MVVM/MVC Model to construct a working, dynamic interface</li>
              <li>Used Java, Kotlin and Jetpack Compose for Client Side Android development</li>
              <li>Demoed in front of around 60 people</li>
            </ul>
          </div>

          
        </section>

        {/* EDUCATION */}
        <section className="exp-section">
          <h2>Education</h2>

          <div className="exp-item">
            <h3>University of Texas at Austin</h3>
            <span>B.S. Computer Science, Japanese Language Minor</span>
            <p>Expected Graduation: May 2027</p>
          </div>
        </section>

        <section className="exp-section">
  <h2>Relevant Coursework</h2>

  <div className="coursework">

     <div className="semester">
      <h4>Spring 2026</h4>
      <ul>
        <li>CS 354 - Computer Graphics</li>
        <li>CS 353 - Theory of Computation</li>
        <li>JPN 611D - Intermediate Japanese</li>
      </ul>
    </div>

      <div className="semester">
      <h4>Fall 2025</h4>
      <ul>
        <li>CS 354P - Game Programming Paradigms</li>
        <li>CS 363M - Principles of Machine Learning I</li>
        <li>JPN 610D - Japanese II</li>
      </ul>
    </div>

     <div className="semester">
      <h4>Spring 2025</h4>
      <ul>
        <li>CS 331 - Algorithms and Complexity</li>
        <li>CS 378 - Intro to Human-Computer Interaction</li>
        <li>M328K - Introduction to Number Theory</li>
        <li>JPN 601D - Japanese I</li>
      </ul>
    </div>

    <div className="semester">
      <h4>Fall 2024</h4>
      <ul>
        <li>CS 439 - Principles of Operating Systems</li>
        <li>CS 378 - Quantum Computing Freshman Research Initiative II</li>
        <li>M340L - Matrices and Matrix Operations (Linear Algebra) </li>
      </ul>
    </div>

    <div className="semester">
      <h4>Spring 2024</h4>
      <ul>
        <li>CS 429 - Computer Architecture</li>
        <li>CS 309 - Quantum Computing Freshman Research Initiative I </li>
        <li>SDS 321 - Intro to Probability </li>
      </ul>
    </div>

    <div className="semester">
      <h4>Fall 2023</h4>
      <ul>
        <li>CS 314 - Data Structures</li>
        <li>CS 311 - Discrete Mathematics</li>
        <li>M 408D - Sequences, Series and Multivariable Calculus</li>
      </ul>
    </div>
  </div>
</section>


        {/* SKILLS */}
        <section className="exp-section">
          <h2>Skills & Languages</h2>

          <div className="skills-grid">
            <div>
              <h4>Programming Languages</h4>
              <p>Java, C++, Python, C, Javascript, CSS, Typescript, SQL, Kotlin </p>
            </div>

            <div>
              <h4>Frameworks & Tools</h4>
              <p>Unreal Game Engine, Pandas, Tensorflow, sci-kit learn, React, Node.js, Git, Figma</p>
            </div>

            <div>
              <h4>Spoken Languages</h4>
              <ul className="language-list">
                <li>
                  <strong>English</strong> — Native
                </li>
                <li>
                  <strong>Japanese</strong> — Conversational (JLPT N5–N4 level, preparing for N3)
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
