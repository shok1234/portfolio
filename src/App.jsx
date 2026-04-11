
import './App.css'

function App() {
  return (
    <>
      <div className="app">
        {/*hero*/}
        <section>
        <h1>Shokhan</h1>
        <p>Frontend Developer | React</p>
        </section>

 {/*about*/}
        <section>
          <h2>About Me</h2>
          <p>I am a frontend developer building web apps using React and JavaScript.</p>

        </section>
        {/*projects*/}
        <section>
  <h2>Projects</h2>

  <div className="project-card">
    <h3>React Weather App</h3>
    <p>Weather app using React and Open-Meteo API</p>
    <a href="https://github.com/shok1234/react-weather-app" target="_blank">
      View Code
    </a>
  </div>
  <div className="project-card">
  <h3>Dashboard App</h3>
  <p>Login + Dashboard + Users API</p>
  <a href="https://github.com/shok1234/dashboard-app.git" target="_blank">
    View Code
  </a>
</div>
 <div className="project-card">
  <h3>LandingPage App</h3>
  <p>Servics + Portfilo + About + Review + Contact</p>
  <a href="https://github.com/shok1234/LandingPage" target="_blank">
    View Code
  </a>
</div>
</section>
        {/*contact*/}
        <section>
          <h2>Contact</h2>
          <p>Email: shokhanyousif@gmail.com</p>

    <p>
  🔗 <a href="https://github.com/shok1234" target="_blank">
    GitHub Profile
  </a>
</p>
        </section>

      </div>
    </>
  )
}

export default App
