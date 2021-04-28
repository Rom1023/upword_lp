import React, { Component } from 'react';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Enter your name',
      email: 'Enter your email',
      checked: false
    };
  }

  isEmailValid = (email) => {
    if (!email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)) {
      return alert("Please enter a valid email");
    }
  };


  handleChange = (event) => {
    this.setState({ name: event.target.value });
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <form>
          <h2>Sign up to get your free trial today!</h2>
          <div className="form-group">
            <input type="email" className="form-control" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} onBlur={() => this.isEmailValid(this.state.email)} />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" />
          </div>
          <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Start my free trial</button>
        </form>
      </div>
    );
  }
}

export default Form;
