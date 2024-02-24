import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

class TTT extends React.Component {
  render(){
    return(
      <div>Hello World</div>
    )
  }
}

ReactDOM.render(<TTT/>, document.getElementById('root'));