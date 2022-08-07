import './App.css';

import Home from './Components/Home'
import About from './Components/About';
import Help from './Components/Help'
import User from './Components/User'
import Error404 from './Components/Error404'

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="/users/:user" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <footer>footer</footer>
      </BrowserRouter>
    </div>
  );

}

export default App;
