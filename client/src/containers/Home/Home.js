import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnimatedRoute } from 'react-router-transition';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Slider from './components/Slider';
import Section from './components/Section';
import DetailPage from './components/DetailPage';
import FlipCard from './components/FlipCard';
import Footer from './components/Footer';

import webJson from './webData.json';
import member from './member.json';
import './Home.less';

class Home extends Component {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
  }

  goDetail = (type) => {
    this.props.history.push(`/detail/${type}`);
  }

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    const { isExact } = this.props.match;

    document.getElementsByTagName('html')[0].style.overflow = isExact ? 'auto' : 'hidden';

    return (
      <div id="pageHome">

        <Slider />
        <div>
          {
            webJson.map((sectionData, index) =>
              <Section
                reverse={index % 2 === 0}
                key={sectionData.key}
                title={sectionData.title}
                dataList={sectionData.dataList.slice(-4).reverse()}
                id={sectionData.key}
                desc={sectionData.desc}
                goDetail={this.goDetail}
              />
            )
          }
        </div>
        <div className={`menu ${!isExact && 'slideIn'}`}>
          {
            webJson.map(sectionData => (
              <Link className="link" to={`/detail/${sectionData.key}`}>{sectionData.title}</Link>
            ))
          }
        </div>
        <div className={`goHome ${!isExact && 'slideIn'}`} onClick={this.goHome}>
          <div className="animated bounce">
            <FontAwesome name="chevron-left"/>
          </div>
        </div>
        <AnimatedRoute
          className="animateRoute"
          path="/detail/:type"
          component={DetailPage}
          atEnter={{ offset: 100 }}
          atLeave={{ offset: 100 }}
          atActive={{ offset: 0 }}
          mapStyles={styles => ({
            transform: `translateX(${styles.offset}%)`,
          })}
        />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Home);
