import React, { Component } from 'react';
// import package
import { HashRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'
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
import Login from './Home/Login';
import Aboutus from './Home/Aboutus';
import NotFound from './NotFound';
import Home from './Home';
import Video from '../containers/Home/components/Media';
import SignIn from '../containers/Home/components/SignIn';
import LoginForm from '../containers/Home/components/LoginForm';
import SignupForm from '../containers/Home/components/SignupForm/SignupForm';
import requireAuth from '../../src/containers/Home/Hoc/requireAuth';
import Contactus from '../containers/Home/Contactus';
import Header from '../containers/Home/components/Header';

class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return(
      <Router>
        <div>
          <Header />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/course" component={Video} />
          <Route exact path="/" component={Home} />
          {/* <Route component={NotFound} /> */}
        </div>
      </Router>
    );
  }
}
//(,mapStateToProp, wire up al diff action creators)
export default connect(null, actions)(Main);

//we can call our action creator by referenceing this props