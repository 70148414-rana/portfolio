import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";


function App() {
  return (
    <>
      <Navbar />
      
      {/* Option A: Using a semantic structural layout wrapper */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;