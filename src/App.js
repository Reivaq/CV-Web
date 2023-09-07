import Navbar from "./componets/NavBar/navBar";
import Intro from './Intros/intro'
import Skills from "./Skills/skills";
import Works from "./Works/works";
import Contact from "./Contact/contact";
import Footer from "./Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
