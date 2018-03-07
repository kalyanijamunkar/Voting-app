import React from 'react';

import {
  Toolbar,
  BackButton,
  ToolbarButton,
  Icon
} from 'react-onsenui';

const MenuButton = () => (
  <ToolbarButton>
    <Icon icon='ion-navicon, material:md-menu'></Icon>
  </ToolbarButton>
);

const NavApp = ({title, navigator, backButton}) => (
  <Toolbar modifier=''>
    <div className='left'>
      {backButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : <MenuButton />}
    </div>
    <div className='center'>Profile</div>
    <div className='right'>
    </div>
  </Toolbar>
);

export default NavApp;
