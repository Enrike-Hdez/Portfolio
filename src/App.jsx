import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';

function App() {

  return (
    <Router basename="/Portfolio">
      <Sidebar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about-me" element={<AboutMe/>}/>
        </Routes>
      </main>
    </Router>
  )

}

export default App;