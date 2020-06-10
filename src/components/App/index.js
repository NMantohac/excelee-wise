import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from '../ScrollToTop';
import Navbar from '../Navbar';
import Home from '../Home';
import AboutUs from '../AboutUs';
import Contact from '../../containers/Contact';
import Donate from '../../containers/Donate';
import Privacy from '../Privacy';
import TermsAndConditions from '../TermsAndConditions';
import Footer from '../Footer';

const App = () => (
  <Router>
    <ScrollToTop />
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about-us" component={AboutUs} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/donate" component={Donate} />
    <Route exact path="/privacy" component={Privacy} />
    <Route exact path="/terms-conditions" component={TermsAndConditions} />
    <Footer />
  </Router>
);

export default App;
