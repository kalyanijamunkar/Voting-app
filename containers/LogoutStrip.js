import React from 'react';

import {
  Ripple
} from 'react-onsenui';

import Login from '../components/Login';

class LogoutStrip extends React.Component {

  render() {
    let { navigator } = this.props;
    return (
      <div>
        <div className='sidebar'>
          <div className='logout-div'> <p onClick={() => {
            navigator.pushPage({component: Login}, {animation: 'slide'});
          }}>
           Logout </p>
            <Ripple color='rgba(192,192, 192, 0.4)' background='rgba(192, 192, 192, 0.4)' />
          </div>
        </div>
      </div>
    );
  }

}
export default LogoutStrip;
