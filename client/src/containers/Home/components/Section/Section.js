import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Block from '../Card/Block';
import Wave from '../Wave';
import './Section.less';
import VideoPage from '../VideoPage';


export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    dataList: PropTypes.array,
    goDetail: PropTypes.func,
    desc: PropTypes.string,
    reverse: PropTypes.bool,
  }


  render() {
    const {
      title, id, VideoId, dataList, goDetail, desc, reverse, goVideo
    } = this.props;
    return (
      <div className="section" id={id}>
        <div className="section_title">
          <div className="item">
            <h4>{title}</h4>
          </div>
          <button className="more" onClick={() => goDetail(id)}>
            <Wave />
          </button>
        </div>
        <div className="content">
          <div className="row">
            {
              dataList.map(
                data =>
                  <Block
                    {...data}
                  />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

