export default function Projects() {
  return (
    <section className="page">
      <div className="page-inner projects">
        <h1>Things I Made</h1>

        <div className="project-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <h3>Froggy Wife, Froggy Life</h3>
            <span className="project-role">
              Game Programming • Artist, Designer, Programmer
            </span>
            <p>
              A pixel 2D educational branching narrative story game made in Unreal Engine with the Paper2D plugin. Final project for CS354P. <br></br>
            </p>
            <p>
              You play as Frog, a well-meaning traveler who forgot to bring his wife, GirlFrog, on a world tour of Japan, France, and Brazil. To save your marriage (and avoid froggy divorce), you must learn about each country to choose the perfect souvenirs.
            </p> 
            <p>
              Role: Artist (all art and animations in the game are done by me), Designer (gameplay flow + sound + endings)
            </p>
            <div className="project-links">
              <a href="#" target="_blank">Play (coming soon...)</a>
              <a href="https://gitlab.com/justinye1/froggywifefroggylife" target="_blank">GitLab</a>
              <a href="https://youtu.be/7_FcxhCvx8s" target="_blank">Trailer</a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <h3>hobby hoppin'</h3>
            <span className="project-role">
              Designathon • UX Designer
            </span>
            <p>
              An app prototype made for UT's Designathon.
            </p>
            <p>
              A mobile app prototype created for UT’s Designathon, focused on helping travelers discover local recommendations based on their hobbies and interests.
            </p>
            <p>
                Designed under tight time constraints with an emphasis on accessibility, clarity, and delightful interaction.

            </p>
            <div className="project-links">
              <a href="https://www.figma.com/proto/UKSNskbHjY7638UaPyAoUW/hobby-hoppin-?content-scaling=fixed&kind=proto&node-id=1-6&page-id=0%3A1&scaling=scale-down&starting-point-node-id=1%3A6" target="_blank">Figma Wireframe</a>
              <a href="https://inspirational-discussions-874613.framer.app/" target="_blank">Our Design Journey</a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <h3>Do Me A Flavor!</h3>
            <span className="project-role">
              React Website • Front-End Developer
            </span>
            <p>
              A recipe authoring tool that helps you customize recipes based on the flavors you like. Made with React and API querying.
            </p>
            <p>
              Role: UI/UX - Designed, wireframed, programmed and user-tested the interface itself.
            </p>
            <div className="project-links">
              <a href="https://kevinyu4.github.io/DoMeAFlavor/" target="_blank">Live Site</a>
              <a href="https://github.com/hathacker5/DoMeAFlavor" target="_blank">GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
