import React from 'react';

import {
  Ripple
} from 'react-onsenui';

import ProfilePage from '../components/ProfilePage';

class ProfileStrip extends React.Component {
  render() {
    let { navigator } = this.props;
    return (
      <div>

        <div className='sidebar'>
          <div className='profile-div'>
            <p onClick={() => {
              navigator.pushPage({component: ProfilePage}, {animation: 'slide'});
            }}> Profile </p>
            <Ripple color='rgba(192,192, 192, 0.4)' background='rgba(192, 192, 192, 0.4)' />
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileStrip;
