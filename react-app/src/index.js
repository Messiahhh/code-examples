import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
componentWillMount() {
    console.log('挂载');
}

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}
let element = <Clock />
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
