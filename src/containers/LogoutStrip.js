import React from 'react';

import {
  Ripple
} from 'react-onsenui';

import Login from '../components/Login';
export const authKey = 'stream_auth_token';
// const StreamsStrip = ({streams, navigator}) => (
//   <div>{streams.length}</div>
// );

class LogoutStrip extends React.Component {
  selectStream(stream_id) {
    console.log(stream_id);
  }

  render() {
    let { navigator } = this.props;
    return (
      <div>
        <div className='sidebar'>
          <div className='logout-div'> <p onClick={() => {
            this.handleLogoutClick();
            navigator.pushPage({component: Login}, {animation: 'slide'});
          }}>
           Logout </p>
            <Ripple color='rgba(192,192, 192, 0.4)' background='rgba(192, 192, 192, 0.4)' />
          </div>
        </div>
      </div>
    );
  }

  handleLogoutClick() {
    localStorage.removeItem(authKey);
  }
}
export default LogoutStrip;
