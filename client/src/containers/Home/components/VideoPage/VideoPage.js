import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import Media from '../Media';
import Footer from '../Footer';
import { fetchPosts } from '../../../../actions/index';
import './VideoPage.less';

class VideoPage extends Component {
  static propTypes = {
    posts: PropTypes.obj
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const {
      posts
    } = this.props;
    // console.log(posts);
    console.log(posts.data[0].key);
    return (
      <div id="pageHome">
        <Header />
        <Media />
        <Footer />
      </div>
    );

  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts })(VideoPage);
