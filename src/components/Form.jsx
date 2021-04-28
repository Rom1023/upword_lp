import React, { Component } from 'react';

import Modal from './Modal';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Enter your name',
      email: 'Enter your email',
      checked: false,
      showModal: false
    };
  }

  isEmailValid = (email) => {
    if (!email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)) {
      return alert("Please enter a valid email");
    }
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  }

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isEmailValid && this.state.checked === true) {
      return this.setState({ showModal: true });
    }
    return this.state.showModal;
    console.log(this.state.showModal);
  }

  handleClick = () => {
    this.setState({ checked: !this.state.checked });
    console.log(this.state.checked);
  }

  hideModal = () => {
    return this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <form className="form">
          <h2>Sign up to get your free trial today!</h2>
          <div className="form-group">
            <label>
              Name
              <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} />
            </label>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} onBlur={() => this.isEmailValid(this.state.email)} />
          </div>
          <div className="form-check">
            <input type="checkbox" onClick={this.handleClick} className="form-check-input" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Start my free trial</button>
        </form>

        <Modal show={this.state.showModal} handleClose={this.hideModal} />
      </div>
    );
  }
}

export default Form;
