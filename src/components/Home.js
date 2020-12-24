import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/index.css';
import '../style/proposal.css'
import pyconImg from '../assets/Pycon_2021-01.png';
import pylogo from '../assets/2020-py-logo.svg';

const Home = ({ setLocale }) => {
  const className = 'pycon';

	return (
		<div>
			<div className={`${className}-header`}>
				<div className="header-left">
					<button onClick={()=> setLocale('zh-TW')}>ZH</button>
					<button onClick={()=> setLocale('en')}>EN</button>
				</div>
				<div className="header-right">
          <div>
            <a href="https://pycontw.blogspot.com/" className="fa fa-book" target="_blank" rel="noopener noreferrer"></a>
					</div>
					<div>
            <a href="https://www.facebook.com/pycontw" aria-label="Facebook" className="fa fa-facebook-official" target="_blank" rel="noopener noreferrer"></a>
					</div>
					<div>
            <a href="https://twitter.com/pycontw" aria-label="Twitter" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
					</div>
					<div>
            <a href="mailto:organizers@pycon.tw" aria-label="Email" className="fa fa-envelope"></a>
          </div>
				</div>
			</div>
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
          <a href="#/proposal" target="_blank" className="call_for_paper">
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
              <a href="https://tw.pycon.org/2020/zh-hant/about/community/">
              <FormattedMessage id="app.community" />
              </a>
            </li>
            <li>
              <a href="https://tw.pycon.org/2020/zh-hant/about/privacy_policy/">
              <FormattedMessage id="app.policy" />
              </a>
            </li>
					</ul>
				</div>
				<div className={`${className}-footer-bottom`}>
					2021 PyCon Taiwan
				</div>
			</footer>
		</div>
	);
}

export default Home;
