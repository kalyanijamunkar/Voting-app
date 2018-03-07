import React from 'react';

import {ListItem} from 'react-onsenui';
import QuizGroupCard from './QuizGroupCard';

const StreamElementCard = ({
  key,
  element,
  navigator,
  actions
}) => {
  return (
    <ListItem>
      { renderElement(element, navigator) }
    </ListItem>
  );
};

function renderElement(element, navigator) {
  switch (element.type) {
    case 'QuizGroup':
      return <QuizGroupCard element={element} navigator={navigator}/>;
    default:
      console.log('Element not found : ' + element.type);
      return <div />;
  }
}

export default StreamElementCard;
