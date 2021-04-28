import React, { Component } from 'react';

import Modal from './Modal';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    if (this.isEmailValid && this.state.email !== '' && this.state.name !== '' && this.state.checked === true) {
      return this.setState({ showModal: true });
    }
    return this.state.showModal;
  }

  handleClick = () => {
    this.setState({ checked: !this.state.checked });
  }

  hideModal = () => {
    return this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="container">
        <div className="left-scene col-sm-6 col-md-4">
          <img src="../../assets/photos/upword-logo.svg" alt="" />
          <h1>Get More From Your <span>Content</span>.</h1>
          <p>UpWord helps you optimize your brand's publications to reach a larger audience, integrating social content with your website.</p>
        </div>

        <div className="col-sm-6 col-md-4">
          <form className="form">
          <p className="form-limited-offer">Limited offer</p>
            <h2>Sign up to get your free trial today!</h2>
            <div className="form-group">
              <label>
                Name
                <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName} placeholder="Enter your name" />
              </label>
            </div>
            <div className="form-group">
              <label>
                Email
              <input type="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} onBlur={() => this.isEmailValid(this.state.email)} placeholder="Enter your email" />
              </label>
            </div>
            <div className="form-check">
              <label>
              <input type="checkbox" onClick={this.handleClick} className="form-check-input" />
              I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Start my free trial</button>
          </form>

          <Modal show={this.state.showModal} handleClose={this.hideModal} name={this.state.name} email={this.state.email} />
        </div>
      </div>
    );
  }
}

export default Form;
