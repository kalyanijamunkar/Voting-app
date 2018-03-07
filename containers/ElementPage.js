import React from 'react';

import QuizGroup from './QuizGroup';
// import {platform} from 'onsenui';

const ElementPage = ({
  element,
  navigator
}) => {
  return (
    renderElement(navigator)
  );
};

function renderElement(element, navigator) {
  return <QuizGroup navigator={navigator} />;
}

export default ElementPage;
