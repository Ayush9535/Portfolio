import './App.css'
import Home from './Sections/Home'
import BlobCursor from './Component/Blob';
import AboutSection from './Sections/Section';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import ContactSection from './Sections/Contact';
import Footer from './Component/Footer';

function App() {

  return (
    // <body>
    <div className="h-full w-full bg-neutral-800">
      <BlobCursor />
      <Home />
      <AboutSection />
      <Skills /> 
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
