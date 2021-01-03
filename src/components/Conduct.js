import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/proposal.css'
import Header from './Header';
import Footer from './Footer';

const Conduct = ({ setLocale }) => {
  const className = 'pycon';

  return(
    <div>
      <Header setLocale={setLocale} />
      <div className={`${className}-proposal`}>
        <p><FormattedMessage id="app.coc.title" /></p>
        <h2><FormattedMessage id="app.coc" /></h2>
        <ul>
          <li><p><FormattedMessage id="app.coc.rule1" /></p></li>
          <li><p><FormattedMessage id="app.coc.rule2" /></p></li>
          <li><p><FormattedMessage id="app.coc.rule3" /></p></li>
        </ul>
        <p><FormattedMessage id="app.coc.footer1" /></p>
        <p><FormattedMessage id="app.coc.footer2" /></p>
      </div>
      <Footer />
    </div>
  );
}

export default Conduct;
