import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import query from '../../../..//queries/CurrentUser'
import mutation from '../../../../mutations/Logout'
import SideNav from '../Sidenav/Sidenav';
import Logo from '../../../../static/images/liveshare.png';
import './Header.less';

{/* <i className="material-icons right icon-grey-darken-4">arrow_drop_down</i> */}

class Header extends Component {
  onLogoutClick() {
    this.props.mutate({
      refetchQueries: [{ query: query }]
    });
  }

  renderContent() {
    console.log(this.props);
    const { loading, current_user } = this.props.data;
    if(loading) { return <div />; }
    
    switch (this.props.auth || current_user) {
      case null:
        return(
          <div>
            <li>
              <Link className="dropdown-button grey-text text-darken-4 item" to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="dropdown-button grey-text text-darken-4 item" data-activates="comp-menu" data-beloworigin="true" data-constrainwidth="false" to="/signup">Sign up</Link>
            </li>
          </div>
        )
      case false:
        return(
          <div>
            <li>
              <Link className="dropdown-button grey-text text-darken-4 item" to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="dropdown-button grey-text text-darken-4 item" data-activates="comp-menu" data-beloworigin="true" data-constrainwidth="false" to="/signup">Sign up</Link>
            </li>
          </div>
        )
      default:
        return (
          <div>
            <li><a className="dropdown-button grey-text text-darken-4 item" href="/api/logout" onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
            <li><Link className="dropdown-button grey-text text-darken-4 item" to="/add">Upload</Link></li> 
          </div>
        )
    }
  }

  componentDidMount() {
    var isMolbile;
    window.$(document).ready(() => {
      window.$(".button-collapse").sideNav({
        menuWidth: 200,
        edge: 'left',
        closeOnClick: true,
        draggable: true
      });
      window.$("#search-icon").click(() => {
        if (window.$("#hanburger-icon").is(":visible")) {
          isMolbile = true;
        }
        window.$("#search-icon").hide();
        window.$("#comp-menu").hide();
        window.$(".button-collapse").hide();
        window.$("#search-div").fadeIn();
        window.$("#search-txt").focus();
      });

      window.$("#close-icon").click(() => {
        window.$("#search-div").fadeOut();
        window.$("#search-icon").fadeIn();
        if (isMolbile) {
          window.$(".button-collapse").fadeIn();
        } else {
          window.$("#comp-menu").fadeIn();
        }
      });

      window.$("#close-txt").blur(() => {
        window.$("#search-div").hide();
        window.$(".button-collapse").show();
        window.$("#search-icon").fadeIn();
      });
    });
  }

  render() {
    const headerLogoImg = {
      backgroundImage: `url(${Logo})`
    };

    return (
      <div>
        {/* Navbar */}
        <nav className="header fixed">
          <div className="nav-wrapper white">
            {/* LOGO */}
            <Link to={this.props.user ? '/' : ''} className="brand-logo center">
              <div className="imgBox">
                <div className="imgBox-inner">
                  <div className="imgBox-fit">
                    <img className="image" alt="liveshare" src={`${Logo}`} />
                  </div>
                </div>
              </div>
            </Link>
            {/* 左邊的按鈕 */}
            <ul className="left hide-on-med-and-down">
              <li>
                <Link to="aboutus" className="dropdown-button grey-text text-darken-4 item">About us</Link>
              </li>
            </ul>
            {/* 右邊的按鈕 */}
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
            {/* Sign up button dropdown for comp */}
            <ul id="comp-menu" className="dropdown-content">
              <li><a>講師陣容</a></li>
              <li><a>我開的課</a></li>
              <li className="divider">z</li>
              <li><a>登入</a></li>
            </ul>
            {/* Sign up button dropdown for mobile */}
            <ul id="mob-menu" className="dropdown-content">
              <li><a>個人資料</a></li>
              <li><a>我開的課</a></li>
              <li className="divider">a</li>
              <li><a>登入</a></li>
            </ul>
            {/* SearchBar的收尋案鈕 */}
            <ul className="right">
              <li className="item">
                <a id="search-icon">
                  <i className="material-icons icon-grey-darken-4">search</i>
                </a>
              </li>
            </ul>

            {/* 漢堡選單CLOSE */}
            <a className="button-collapse" data-activates="side-out"><i className="material-icons icon-grey-darken-4" id="hanburger-icon">menu</i></a>

            {/* SearchBar */}
            <div className="left" style={{height: "100%", width: "100vw"}}>
              <form>
                <div className="input-field" id="search-div">
                  <input type="search" id="search-txt" />
                  <i className="material-icons icon-grey-darken-4 posr-l-10">search</i>
                  <i className="material-icons" id="close-icon">close</i>
                </div>
              </form>
            </div>
          </div>
        </nav>
        {/* 漢堡選單OPEN */}
        <ul className="side-nav" id="side-out">
          <li><a><i className="material-icons icon-grey-darken-4">search</i></a></li>
          <li><Link to="aboutus" className="dropdown-button grey-text text-darken-4">About us</Link></li>
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

let ComponentWithData = graphql(mutation)(
  graphql(query)(Header)
);

export default connect(mapStateToProps)(ComponentWithData)