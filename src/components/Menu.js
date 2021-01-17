import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/index.css';

const Menu = () => {
  const className = 'pycon';

  return (
    <div className={`${className}-menu`}>
      <ul>
        <li>
          <a href="https://tw.pycon.org/2020/zh-hant/about/pycontw/">
            <FormattedMessage id="app.about" />
          </a>
        </li>
        <li>
          <a href="#/proposal">
            <FormattedMessage id="app.cfp" />
          </a>
        </li>
      </ul>
		</div>
  );
}

export default Menu;
