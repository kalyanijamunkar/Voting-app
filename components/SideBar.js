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
    this.state = {
      isOpen: false,
      streamElements: [
          {id: '1', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'Who should be the next president of the United States?', description: 'What is your preferred JavaScript library?',
          answers: [{answer_text: 'Hillary Clinton', percentage: 80, index: 1}, {answer_text: 'johny depp', percentage: 80, index: 2}], graph_data: [{answer_text: 'Donald Trump', index: 1, percentage: 80}, {answer_text: 'johny depp', index: 1, percentage: 80}]},

        {id: '2', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'What is your preferred JavaScript library?', description: 'What is your preferred JavaScript library?',
          answers: [{answer_text: ' React', percentage: 49, index: 1}, {answer_text: 'Angular js', percentage: 70, index: 2}], graph_data: [{answer_text: 'hello', index: 1, percentage: 49}, {answer_text: 'ghvjhbhj', index: 1, percentage: 70}]
      },
      {id: '3', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'What is your preferred fast food chain?', description: 'What is your preferred fast food chain?',
        answers: [{answer_text: 'Chick-fil-a', percentage: 40, index: 1}, {answer_text: 'McDonald', percentage: 40, index: 2}], graph_data: [{answer_text: 'hello', index: 1, percentage: 40}, {answer_text: 'ghvjhbhj', index: 1, percentage: 40}]
    },
    {id: '4', type: 'QuizGroup', attempt_status: 'Not Complete', title: 'Who Will Win Super Bowl 51?', description: 'Who Will Win Super Bowl 51?',
      answers: [{answer_text: ' New England Patriots', percentage: 58, index: 1}, {answer_text: 'Atlanta Falcons', percentage: 74, index: 2}], graph_data: [{answer_text: 'hello', index: 1, percentage: 40}, {answer_text: 'ghvjhbhj', index: 1, percentage: 40}]
  }
  ]
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
        <div className='center' style={{color: 'white'}}>
         Voting App
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
