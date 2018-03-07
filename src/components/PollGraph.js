import React from 'react';

const ProgressBar = ({answer_text, percentage, index}) => {
return(
  <div className='progress'>
    <div className='progress-bar' style={{ width: percentage + '%', color: 'black' }}>
      <div style={{display: 'flex', flex: 1 }}>
  <div style={{display: 'flex', flex: 1, color: 'black', fontWeight: 400, paddingLeft: 20, fontSize: 'medium'}}>
        {answer_text}
      </div>
      <div style={{color: 'white', fontWeight: 400, fontSize: 'medium'}}>
        {percentage} Hits
    </div>
      </div>
    </div>
  </div>
);
}

class PollGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: []
    };
  }
  render() {
    debugger;
    let bars = this.props.bars;
    return (
      <div className='poll-graph'>
        {bars.map((bar, index) =>
          <ProgressBar {...bar} key={index} index={index}/>
        )}
      </div>
    );
  }
}
// const PollGraph = ({bars}) => (
//   <div className='poll-graph'>
//     {bars.map((bar, index) =>
//       <ProgressBar {...bar} key={index} index={index}/>
//     )}
//   </div>
// );

export default PollGraph;
