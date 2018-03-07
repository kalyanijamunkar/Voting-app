import React from 'react';

import {
  Toolbar,
  Splitter,
  SplitterSide,
  ToolbarButton,
  SplitterContent,
  Page,
  Icon
} from 'react-onsenui';
import StreamElementList from '../containers/StreamElementList';
import LogoutStrip from './LogoutStrip';
import ProfileStrip from './ProfileStrip';

class SideBar extends React.Component {
  constructor() {
    super();
    // let element = [
    //     {id: '1', type: 'QuizGroup', attempt_status: 'Complete', title: 'hello', description: 'erg'},
    //     {id: '1', type: 'QuizGroup', attempt_status: 'Complete', title: 'jjnjkb', description: 'wegwf'}
    //   ];
    this.state = {
      isOpen: false,
      streamElements: [
          {id: '1', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'who is your favourite actor?', description: 'erg',
          answers: [{answer_text: 'tom cruise', percentage: 50, index: 1}, {answer_text: 'johny depp', percentage: 20, index: 2}], graph_data: [{answer_text: 'tom cruise', index: 1, percentage: 20}, {answer_text: 'johny depp', index: 1, percentage: 20}]},

        {id: '2', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'jjnjkb', description: 'wegwf',
          answers: [{answer_text: 'hello', percentage: 20, index: 1}, {answer_text: 'ghvjhbhj', percentage: 20, index: 2}], graph_data: [{answer_text: 'hello', index: 1, percentage: 20}, {answer_text: 'ghvjhbhj', index: 1, percentage: 20}]
      }]
    };
  }

  renderToolbar() {
    let _this = this;
    return (
      <Toolbar style={{backgroundColor: '#29ABE2'}}>
        <div className='left'>
          <ToolbarButton onClick={_this.show.bind(this) }>
            <Icon icon='ion-navicon, material:md-menu' />
          </ToolbarButton>
        </div>
        <div className='center'>
         Votting App
        </div>
        <div className='right' >
          <ToolbarButton >
            <Icon icon='fa-search'></Icon>
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }

  hide() {
    this.setState({isOpen: false});
  }

  show() {
    this.setState({isOpen: true});
  }

  render() {
    return (
      <Page key='side-main'>
        <Splitter>
          <SplitterSide
            style={{
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
            }}
            side='left'
            width={255}
            collapse={true}
            isSwipeable={true}
            isOpen={this.state.isOpen}
            onClose={this.hide.bind(this)}
            onClick={this.hide.bind(this)}
            onOpen={this.show.bind(this)}
            >
            <Page key= 'streamPage'>
              <div className='streamView'>
                <div className='stream_heading'>Polls Home</div>
                <ProfileStrip navigator={this.props.navigator}/>
                <LogoutStrip navigator={this.props.navigator}/>
              </div>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={this.renderToolbar.bind(this)} className='bggrey main-page' key='content'>
              <section style={{margin: '16px'}}>
                <div className='main-page-content'>
                  <StreamElementList navigator={this.props.navigator} streamElements={this.state.streamElements}/>
                </div>
              </section>
            </Page>
          </SplitterContent>
        </Splitter>
      </Page>
    );
  }
}

export default SideBar;
