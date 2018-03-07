import React, { Component } from 'react';
import { Button } from 'react-onsenui';
import PollGraph from '../components/PollGraph';
class QuizGroupCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      voteFlag: false,
      clickedAnswer: '',
      attempt_status: props.element.attempt_status
    }
  }
  showBeginButton() {
    return (
      <div className='quiz-btn-cta'>
        <Button
          className='begin'
          modifier='large--cta'
          onClick={() => {
            this.renderSurvey();
          }}
          style={{backgroundColor: '#25a6d9'}}
          >
          Begin
        </Button>
      </div>
    );
  }

  showResultButton() {
    //  const { navigator, element } = this.props;
      return (
        <div className='quiz-btn-cta'>
          <Button
            className='begin'
            modifier='large--cta'
            style={{backgroundColor: '#25a6d9'}}
            onClick={() => {
              this.renderPollGraphClick();
            }}
            >
            View Result
          </Button>
        </div>
      );
  }
  renderSurvey() {
    this.setState({flag: true});
  }

  showStatus() {
    return this.showBeginButton();
  }

  renderPollGraphClick() {
    let finishStatus = 'Complete';
    this.setState({attempt_status: finishStatus});
  }

  renderPollForm() {
    let element = this.props.element;
    return (
      <div>
        {element.answers.map((answer, index) =>
          <div
            key={index} style={(this.state.voteFlag && this.state.clickedAnswer === answer) ? {border: '#ddd', color: 'black', backgroundColor: 'lightGrey',
    borderRadius: 5,
    borderStyle: 'solid', padding: 10, borderWidth: 1, margin: 5} : {border: '#ddd', color: 'black', backgroundColor: 'white',
borderRadius: 5,
borderStyle: 'solid', padding: 10, borderWidth: 1, margin: 5}}>
            <div onClick={!this.state.voteFlag && this.handleAnswerChange.bind(this, answer)} style={{display: 'flex', flex: 1}}>
              {answer.answer_text}
        </div>
      </div>
      )}
      <div>{this.state.voteFlag === true && this.showResultButton()}</div>
      </div>
    );
  }

  renderAnswer() {
    let element= this.props.element;
    if(this.state.attempt_status === 'Complete') {
    return this.renderPollGraph();
  } else {
    return this.renderPollForm();
  }
  }

    handleAnswerChange(answer) {
        this.props.element.answer = answer;
        this.setState({voteFlag: true});
          this.setState({clickedAnswer: answer});
          let percentage = answer.percentage + 1;
          answer.percentage = percentage;
          debugger;

    }

  renderPollGraph() {
      return (
        <div>
          <PollGraph bars={this.props.element.answers} />
        </div>
      );
    }

  render() {
    let { element } = this.props;
    return (
      <div className='flat-card-quiz'>
        <div className='quizInfo'>
          <div className='title'>
            {element.title}
          </div>
        </div>
        {
          (this.state.flag === false) ?
            <div className='quiz-btn-cta'>
              { this.showStatus() }
            </div>
            :
            <div>
            {this.renderAnswer()}
        </div>
        }
      </div>
    );
  }
 };

export default QuizGroupCard;
