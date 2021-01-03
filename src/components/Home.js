import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/index.css';
import '../style/proposal.css'
import pyconImg from '../assets/Pycon_2021-01.png';
import Header from './Header';
import Footer from './Footer';

const Home = ({ setLocale }) => {
  const className = 'pycon';

	return (
		<div>
			<Header setLocale={setLocale}/>
			<div className={`${className}-vulunteer`}>
				<h2>Welcome to PyCon TW21</h2>
				<img src={pyconImg} alt={pyconImg} />
				<ul>
					<li><a href="/"><FormattedMessage id="app.about" /></a></li>
        </ul>
        <div className="index-action">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScYhMAg4_T4Shi-W0vt9EkGyrpTMHemvcY55ZKc2-MfVqDzGg/viewform" className="become_volunteer">
            <FormattedMessage id="app.volunteer" />
          </a>
          <a href="#/proposal" className="call_for_paper" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="app.cfp" />
          </a>
        </div>
			</div>
			<div className={`${className}-about`}>
				<div className="about_pycon">
					<h3><FormattedMessage id="pycon" /></h3>
					<p><FormattedMessage id="pycon.content" /></p>
				</div>
				<div className="about_pycon_taiwan">
					<h3><FormattedMessage id="pycontw" /></h3>
					<p><FormattedMessage id="pycontw.content" /></p>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
