import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import Block from '../Card/Block';
import Wave from '../Wave';
import './Section.less';


export default class Section extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    title: PropTypes.string,
    dataList: PropTypes.array,
    id: PropTypes.string,
    desc: PropTypes.string,
    goDetail: PropTypes.func,
  }




  render() {
    const { reverse, title, dataList, id, desc, goDetail } = this.props;
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

