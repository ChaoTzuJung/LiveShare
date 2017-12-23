import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contactus.less';

export default class Contactus extends Component {

  render() {
    return (
      <div>
          <form action="/contact/post" method="post">
              <h1>聯絡我們</h1>
              <div>
                  <label for="username">姓　　名：</label>
                  <input type="text" name="username" id="username"/>
              </div>
              <div>
                  <label for="email">電子郵件：</label>
                  <input type="text" name="email" id="email"/>
              </div>
              <div>
                  <label for="title">標　　題：</label>
                  <input type="text" name="title" id="title"/>
              </div>
              <div>
                  <label for="description">訊息內容：</label>
                  <textarea name="description" id="description" cols="30" rows="10"></textarea>
              </div>
              <div>
                  <input type="submit" value="送出訊息" />
              </div>
          </form>
      </div>
    );
  }
}
