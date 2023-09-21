//import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Redirect from './Components/Redirect';
const Blog = React.lazy( ()=>import('./Components/Blog'));
//import Blog from './comps/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Redirect path="/home" />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
