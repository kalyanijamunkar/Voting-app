import React from 'react';

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

export default StreamContents;
