import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';
import messages from './messages';
import registerServiceWorker from './registerServiceWorker';

addLocaleData([...en, ...es, ...fr]);

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
