import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import $ from 'jquery';
import { Collapsible, CollapsibleItem } from 'react-materialize';

export default class CollapsibleBtn extends Component {
  // componentDidUpdate() {
  //   window.$(document).ready(() => {
  //     $('.collapsible').collapsible({
  //       accordion : true
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <Collapsible>
          <CollapsibleItem header='前端工程師 x 1' icon='filter_drama'>
            <span>
              <h5>工作內容</h5><br/>
              <ul>
                <li>與設計師及後端工程師合作進行網頁的開發與維護</li>
              </ul>
              <ul>
                <li>使用過 JS Framework 撰寫網站 ex: React, Vue, Angular</li>
                <li>Style 語言為 Sass + Styled Component 並且使用 Bootstrap</li>
                <li>Build system 使用 webpack</li>
              </ul>
              <h5>勝任這份工作的基本條件</h5><br/>
              <ul>
                <li>使用過 JS Framework 撰寫網站 ex: React, Vue, Angular</li>
                <li>Style 語言為 Sass + Styled Component 並且使用 Bootstrap</li>
                <li>Build system 使用 webpack</li>
              </ul>
            </span>
          </CollapsibleItem>
          <CollapsibleItem header='後端工程師 x 1' icon='place'>
            <span>
              <h5>工作內容</h5><br/>
              <ul>
                <li>網站 API 開發與維護</li>
                <li>第三方服務（郵件、客服等）系統整合</li>
                <li>協助伺服器維護與管理</li>
              </ul>
              <h5>勝任這份工作的基本條件</h5><br/>
              <ul>
                <li>熟悉 NodeJS (ExpressJS)</li>
                <li>熟悉 MongoDB (Mongoose)</li>
                <li>曾經有開發 Restful API 的經驗</li>
                <li>熟悉 Git</li>
              </ul>
            </span>
          </CollapsibleItem>
          <CollapsibleItem header='社群經營與行銷實習 x 1~3' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='社群行銷經理(正職) x 1' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='影像錄製與編輯人員 x 1（全職)' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='社群經營與行銷實習 x 1~3' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='影像錄製與編輯人員 x 1（全職）' icon='filter_drama'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='老師專案企劃大使（兼職）x 1' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='行政管理專員(正職) x 1' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}
 