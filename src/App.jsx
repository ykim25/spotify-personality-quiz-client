import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// Components
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
// Pages
import Home from './pages/home/Home'
import Loading from './pages/loading/Loading'
import ResultConfirmation from './pages/result-confirmation/ResultConfirmation'
import FinalResults from './pages/final-results/FinalResults'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/loading' element={<Loading />} />
          <Route exact path='/result-confirmation' element={<ResultConfirmation />} />
          <Route exact path='/finalresults' element={<FinalResults />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
