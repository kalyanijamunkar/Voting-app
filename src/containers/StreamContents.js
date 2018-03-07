import React from 'react';
import {connect} from 'react-redux';

import {List} from 'react-onsenui';

import StreamElementCard from './StreamElementCard';

const StreamContents = ({streamElements, navigator}) => (
  <List
    dataSource={streamElements}
    renderRow={(element) =>
      <StreamElementCard
        key={element.type + '-' + element.id}
        navigator={navigator}
        element={element}
      />
    }
  />
);

const mapStateToProps = (state) => ({
  streamElements: state.streamElements
  // .filter(e => (e.type === 'Topic') || (e.type === 'QuizGroup'))
});

export default connect(mapStateToProps)(StreamContents);
