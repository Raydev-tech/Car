import { BrowserRouter,Routes,Route } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import Call from './Pages/Call'
import Most from './Pages/Most'
import Why from './Pages/Why'
import Latest from './Pages/Latest'
import TestimonialPage from './Pages/testimonials'
// import Type from './Pages/Type'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='type' element={<Type />} /> */}
          <Route path='call' element={<Call />} />
          <Route path='most' element={<Most />} />
          <Route path='why' element={<Why />} />
          <Route path='latest' element={<Latest />} />
          <Route path='testimonial' element={<TestimonialPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
