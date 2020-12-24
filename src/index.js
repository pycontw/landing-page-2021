import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './components/App';
import en from './i18n/en.js';
import zh from './i18n/zh.js';

const Root = () => {
  // navigator.language: browser’s language version
  const [locale, setLocale] = useState('zh-TW' || navigator.language);
  let messages;

  if (locale.includes('zh')) {
    messages = zh;
  } else {
    messages = en;
  }

  return (
    <IntlProvider
      locale={locale}
      key={locale}
      defaultLocale='zh-TW'
      messages={messages}
    >
      <App setLocale={setLocale}/>
    </IntlProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
