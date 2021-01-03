import React from 'react';
import { Link } from "react-router-dom";

import '../style/index.css';

const Header = ({ setLocale }) => {
  const className = 'pycon';

  return (
    <div className={`${className}-header`}>
				<div className="header-left">
					<button onClick={() => setLocale('zh-TW')}>ZH</button>
          <button onClick={() => setLocale('en')}>EN</button>
          <Link to="/">PyCon TW21</Link>
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
  );
}

export default Header;
