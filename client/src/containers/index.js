import React from 'react';
// import package
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
// import { Router, browserHistory } from 'react-router';
// import 'normalize.css/normalize.css';
import 'ress/dist/ress.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
// <!-- Import OwlCarousel2 -->
import '../../node_modules/owl.carousel/dist/owl.carousel.min.js';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';
// <!-- Import materialize -->
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min.js';


// import relative path
import VideoPage from './Home/components/VideoPage';
import Signup from './Home/Signup';
import Aboutus from './Home/Aboutus';
import Home from './Home';
import NotFound from './NotFound';

const Main = () => (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={Home} />*/}
      {/* <Route path="/VideoPage" component={VideoPage} /> */}
      <Route path="/Aboutus" component={Aboutus} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Main;
