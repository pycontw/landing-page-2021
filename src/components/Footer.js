import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/index.css';
import pylogo from '../assets/2020-py-logo.svg';

const Footer = () => {
  const className = 'pycon';

  return (
    <footer>
      <div className={`${className}-footer-top`}>
        <img src={pylogo} alt={pylogo}/>
        <ul>
          <li>
            <a href="#/code-of-conduct">
              <FormattedMessage id="app.coc" />
            </a>
          </li>
          <li>
            <a href="https://tw.pycon.org/2021/zh-hant/about/community/">
              <FormattedMessage id="app.community" />
            </a>
          </li>
          <li>
            <a href="https://tw.pycon.org/2021/zh-hant/about/privacy_policy/">
              <FormattedMessage id="app.policy" />
            </a>
          </li>
        </ul>
      </div>
      <div className={`${className}-footer-bottom`}>
        2021 PyCon Taiwan
      </div>
    </footer>
  );
}

export default Footer;
