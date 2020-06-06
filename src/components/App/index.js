import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../Navbar';
import Home from '../Home';
import Footer from '../Footer';

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Footer />
  </Router>
);

export default App;
