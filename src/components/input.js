import React, {Component} from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      status: "Start Typing",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount () {
    console.log("Works");

  }

  handleChange(event) {
    this.setState({value: event.target.value}, function () {
      if(this.state.value.toUpperCase() === this.props.answer) {
        this.setState({status: "You are right"});
      }
      else if(this.state.value.toUpperCase() === this.props.answer.substring(0, this.state.value.length)) {
        this.setState({status: "Doing great continue"});
      }
      else {
        this.setState({status: "Oops you did something wrong"});
      }

      if (this.state.value === '') {
        this.setState({status: "Start Typing"});
      }
    });
  }

  render() {
    return (
      <div className='inputBox'>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Answer here" />
        <div className='status'>
          {this.state.status}
        </div>
      </div>
    )
  }
}

export default Input;
