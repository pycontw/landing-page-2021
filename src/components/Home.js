import React, { useEffect }  from 'react';

import { Link } from "react-router-dom";

import '../style/index.css';
import '../style/proposal.css'
import pyconImg from '../assets/Pycon_2021-01.png';
import pylogo from '../assets/2020-py-logo.svg';
import facebook from '../assets/facebook.svg'

const Home = () => {
	const className = 'pycon'
	return (
		<div>
			<div className={`${className}-header`}>
				<div className="header-left">
					<button onClick={()=> console.log('click')}>ZH</button>
					<button>EN</button>
				</div>
				<div className="header-right">
					<div>
            <img src={facebook} alt=""/>
					</div>
					<div>
						<img src={facebook} alt=""/>
					</div>
					<div>
						<img src={facebook} alt=""/>
					</div>
					<div>
						<img src={facebook} alt=""/>
					</div>
				</div>
			</div>
			<div className={`${className}-vulunteer`}>
				<h2>Welcome to PyCon TW21</h2>
				<img src={pyconImg}/>
				<ul>
					<li><a href="/">關於</a></li>
					<li><a href="/">COVID-19 防疫守則</a></li>
        </ul>
        <div className="index-action">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScYhMAg4_T4Shi-W0vt9EkGyrpTMHemvcY55ZKc2-MfVqDzGg/viewform" className="become_volunteer">
            成為志工
          </a>
          <a href="#/proposal" target="_blank" className="call_for_paper">
            徵求稿件
          </a>

        </div>
			</div>
			<div className={`${className}-about`}>
				<div className="about_pycon">
					<h3>何謂 PyCon</h3>
					<p>PyCon 最初於 2003 成立於北美，現在世界各地皆有以 PyCon 精神而成立的會議。</p>
				</div>
				<div className="about_pycon_taiwan">
					<h3>何謂 PyCon Taiwan</h3>
					<p>PyCon Taiwan 為一年一度由愛好者舉辦、討論並提倡使用 Python 程式語言的會議，聚焦在 Python 技術與其多樣的可能應用的交流。我們歡迎所有對 Python 有興趣的朋友一同加入 PyCon Taiwan 來分享所學、交換想法、並且認識更多同好。</p>
				</div>
			</div>
			<footer>
				<div className={`${className}-footer-top`}>
					<img src={pylogo}/>
					<ul>
						<li><a href="/">行為準則</a></li>
						<li><a href="/">工作人員</a></li>
						<li><a href="/">社群</a></li>
						<li><a href="/">個人資料保護聲明</a></li>
					</ul>
				</div>
				<div className={`${className}-footer-bottom`}>
					2020 PyCon Taiwan
				</div>
			</footer>
		</div>
	);
}

export default Home;
