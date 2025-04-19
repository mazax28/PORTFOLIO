import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
      <Toaster/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
