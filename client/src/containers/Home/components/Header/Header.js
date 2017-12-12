import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../static/images/liveshare.png';
import Searchbar from '../Searchbar';
import './Header.less';

export default class Header extends Component {

  render() {
    const LogoImage = {
      backgroundImage: `url(${Logo})`
    };
    const FullWidth = {
      width: '100vw',
      height: '64px',
      backgroundColor: 'white',
      zIndex: '20',
      border: '1px solid red',
      display: 'none'
    };
    return (
      <div>
        <nav className="header">
          <div className="nav-wrapper white formobile">
            <a href="" className="brand-logo center">
              <div className="imgbox imgbox-mobile">
                <div className="imgbox-inner">
                  <div className="image" style={LogoImage} />
                </div>
              </div>
            </a>
          </div>
          <div className="nav-wrapper white fordesktop">
            <div className="right">
              <form>
                <div class="input-field" id="search-div" style={FullWidth}>
                  <input id="search-txt" type="search" required />
                  <label class="label-icon" for="search-txt"><i class="material-icons">search</i></label>
                  <i class="material-icons" id="close-icon">close</i>
                </div>
              </form>
            </div>
            <ul className="left hide-on-med-and-dow">
              <li>
                <a href="" className="greenline">
                  <span className="grey-text text-darken-4">Video</span>
                </a>
              </li>
              <li>
                <Link to={`/Aboutus`} className="greenline current">
                  <span className="grey-text text-darken-4">About us</span>
                </Link>
              </li>
            </ul>
            <a href="" className="brand-logo center">
              <div className="imgbox">
                <div className="imgbox-inner">
                  <div className="image" style={LogoImage} />
                </div>
              </div>
            </a>
            <li className="Search_1">
              <a href="" id="search-icon">
                <i className="material-icons grey-darken-4">search</i>
              </a>
            </li>
            <ul className="right hide-on-med-and-dow">
              <li className="Search_2">
                <a href="" id="search-icon">
                  <i className="material-icons grey-darken-4">search</i>
                </a>
              </li>
              <li>
                <a href="" className="greenline">
                  <span className="grey-text text-darken-4">Log in</span>
                </a>
              </li>
              <li>
                <Link to={`/Signup`} className="greenline">
                  <span className="grey-text text-darken-4">Sign up</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

