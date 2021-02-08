import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/proposal.css'
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const Proposal = ({ setLocale }) => {
  const className = 'pycon';

  return(
    <div>
      <Header setLocale={setLocale} />
      <Menu />
      <div className={`${className}-proposal`}>
				<p><FormattedMessage id="app.cfp.title" /></p>
				<h2><FormattedMessage id="app.cfp.date" /></h2>
				<ul>
          <li><FormattedMessage id="app.cfp.date.1" /></li>
          <li>
            <FormattedMessage
              id="app.cfp.date.2"
              values={{ AoE: <a href="https://www.timeanddate.com/worldclock/converter.html?iso=20210427T115900&p1=tz_aoe&p2=241&p3=1440">(AoE)</a> }}
            />
          </li>
					<li><FormattedMessage id="app.cfp.date.3" /></li>
				</ul>
        <p>
          <FormattedMessage
            id="app.cfp.date.content"
            values={{ pyvideo: <a href="https://pyvideo.org">pyvideo.org</a>,
                      recording: <a href="https://tw.pycon.org/2021/zh-hant/speaking/recording/"><FormattedMessage id="recording.release" /></a>,
                      contributes: <a href="https://pyfound.blogspot.com/2017/10/psfs-october-board-meeting.html">Everyone Contributes Policy</a>
                    }}
          />
				</p>
				<h2><FormattedMessage id="app.cfp.submit" /></h2>
        <p>
          <FormattedMessage
            id="app.cfp.submit.content"
            values={{ pycon: <a href="https://tw.pycon.org/2021/en-us/">tw.pycon.org</a>,
                      signup: <a href="https://tw.pycon.org/2021/zh-hant/accounts/signup/"><FormattedMessage id="signup" /></a>,
                    }}
          />
				</p>
				<h2><FormattedMessage id="app.cfp.guidelines" /></h2>
				<h3><FormattedMessage id="app.cfp.talk" /></h3>
				<p><FormattedMessage id="app.cfp.talk.1" /></p>
				<ul>
          <li>
            <FormattedMessage
              id="app.cfp.talk.2"
              values={{ pycon2020: <a href="https://tw.pycon.org/2020/zh-hant/events/schedule/">PyCon Taiwan 2020</a> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="app.cfp.talk.3"
              values={{ pycon2019: <a href="https://tw.pycon.org/2019/zh-hant/events/schedule/">PyCon Taiwan 2019</a> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="app.cfp.talk.4"
              values={{ pycon2018: <a href="https://tw.pycon.org/2018/zh-hant/events/schedule/">PyCon Taiwan 2018</a> }}
            />
          </li>
          <li>
            <FormattedMessage
              id="app.cfp.talk.5"
              values={{ pycon2017: <a href="https://tw.pycon.org/2017/zh-hant/events/schedule/">PyCon Taiwan 2017</a> }}
            />
          </li>
				</ul>
				<p><FormattedMessage id="app.cfp.talk.6" /></p>
        <p><FormattedMessage id="app.cfp.talk.7" /></p>
        <p>
          <FormattedMessage
            id="app.cfp.talk.8"
            values={{ talk: <a href="https://tw.pycon.org/2021/zh-hant/speaking/talk/"><FormattedMessage id="talk" /></a> }}
          />
        </p>
        <p><FormattedMessage id="app.cfp.talk.9" /></p>
				<h3><FormattedMessage id="app.cfp.tutorials" /></h3>
        <p>
          <FormattedMessage
            id="app.cfp.tutorials.content"
            values={{ talk: <a href="https://tw.pycon.org/2021/zh-hant/speaking/talk/"><FormattedMessage id="talk" /></a>,
                      tutorials: <a href="https://tw.pycon.org/2021/zh-hant/speaking/tutorial/"><FormattedMessage id="tutorials" /></a>}}
          />
				</p>
				<h2><FormattedMessage id="app.cfp.review" /></h2>
				<p><FormattedMessage id="app.cfp.review.content" /></p>
				<ul>
					<li><FormattedMessage id="app.cfp.review.rule1" /></li>
					<li><FormattedMessage id="app.cfp.review.rule2" /></li>
					<li><FormattedMessage id="app.cfp.review.rule3" /></li>
				</ul>
				<h2><FormattedMessage id="app.cfp.modify" /></h2>
				<p><FormattedMessage id="app.cfp.modify.content" /></p>
        <p>
          <FormattedMessage
            id="app.cfp.modify.question"
            values={{ email: <a href="mailto:program@pycon.tw">program@pycon.tw</a> }}
          />
        </p>
				<h3><FormattedMessage id="app.cfp.warning" /></h3>
        <p>
          <FormattedMessage
            id="app.cfp.warning.content"
            values={{ coc: <a href="#/code-of-conduct"><FormattedMessage id="app.coc" /></a> }}
          />
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Proposal;
