import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SectionFive from './components/sectionFive/SectionFive'
import SectionSix from './components/sectionSix/SectionSix'
import SectionSeven from './components/sectionSeven'
import Footer from './components/footer'
import Subscribe from './components/subscribe'
function App() {
  return (
    <div className='app'>
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
