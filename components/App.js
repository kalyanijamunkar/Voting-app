import React from 'react';
import { Navigator } from 'react-onsenui';
import Login from './Login';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const App = (props) => {
  let initialRoute = {};
  initialRoute.component = Login;
  initialRoute.key = 'Login';

  return (
    <Navigator
      renderPage={renderPage}
      initialRoute={initialRoute}
      />);
};
export default App;
