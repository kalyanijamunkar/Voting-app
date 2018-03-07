import React, { Component } from 'react';
import NavApp from '../components/NavBar';

import {
  Page
} from 'react-onsenui';

import '../css/card.css';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_profile: {
        first_name: 'kalyani', last_name: 'Jamunkar', email: 'abc', company_name: 'gatha' }
    }
  }
  render() {
    let user_profile = this.state.user_profile;
    return (
      <Page
      renderToolbar={() => <NavApp backButton={true} title='View Profile' navigator={this.props.navigator} />}
      className='bgwhite'>
        <div className='profile-img-background'>
          <div className='profile-image'>
            <img width={100} style = {{ borderRadius: '50%' }} src={require('../images/User-log.jpg')} alt='profile' className='logo'/>
          </div>
          <div className='username'> {user_profile.first_name} {user_profile.last_name} </div>
        </div>
        <div className='profile-page-about-details'>
          <div className='user-data'>
            <div className='emailHeading'> Email : </div>
            <div className='userEmail'> {user_profile.email}
            </div>
          </div>
          <div className='user-data'>
            <div className='fnameHeading'> First Name : </div>
            <div className='UserFname'> {user_profile.first_name} </div>
          </div>
          <div className='user-data'>
            <div className='lnameHeading'> Last Name : </div>
            <div className='UserLname'> {user_profile.last_name} </div>
          </div>
          <div className='user-data'>
            <div className='organizationHeading'> Organization : </div>
            <div className='UserOrganization'> {user_profile.company_name} </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default ProfilePage;
