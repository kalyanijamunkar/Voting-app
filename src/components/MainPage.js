import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import StreamElementList from '../containers/StreamElementList';
import StreamsStrip from '../containers/StreamsStrip';

const MainPage = ({navigator}) => (
  <Page renderToolbar={() => <NavBar title='Blog design' navigator={navigator}/>} className='bggrey main-page'>
    <StreamsStrip navigator={navigator} />
    <div className='main-page-content'>
      <StreamElementList navigator={navigator} />
    </div>
  </Page>
);

export default MainPage;
