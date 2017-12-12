import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './Footer.less';
import Logo from '../../../../static/images/liveshare.png';

export default class Footers extends Component {

  render() {
    return (
      <footer className="page-footer blue-grey darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12 w50">
              <ul className="foot-list">
                <li><a className="grey-text text-lighten-3" href="#!">關於我們</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">提供意見</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">隱私權</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">服務條款</a></li>
              </ul>
            </div>
            <div className="col l6 s12 w50">
              <ul className="foot-list">
                <li><i className="fa fa-twitter fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-instagram fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-facebook-official fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-youtube-play fa-2x" aria-hidden="true" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container flex">
            <div className="align-self-fe m10">
              <div className="imgBox">
                <div className="imgBox-inner">
                  <div className="imgBox-fit">
                    <img className="image" alt="liveshare" src={`${Logo}`} />
                  </div>
                </div>
              </div>
            </div>
            <div className="align-self-fe mb10">
              <p>Copyright @ 2017 LiveShare Inc. 保留一切權利。</p>
            </div>
            <select className="browser-default col s12 m6 bgc-op w25 fr align-self-fe posa-r0 ">
              <option value="" disabled selected>Choose your language</option>
              <option value="1">繁體中文</option>
              <option value="2">簡體中文</option>
              <option value="3">英文</option>
            </select>
          </div>
        </div>
      </footer>
    );
  }
}
