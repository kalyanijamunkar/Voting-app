/* eslint-disable import/default */
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
import './stylus/index.styl';
import './css/card.css';

const rootElement = document.getElementById('root');

ons.ready(() => render(
  <App />,
  rootElement
));
