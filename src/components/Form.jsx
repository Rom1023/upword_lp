import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Modal from './Modal';

// Validations
const required = (value) => {
  return value ? undefined : 'Required';
};

const minLength = (min) => {
  return (value) => {
    return value && value.length < min ? `Must be ${min} characters or more` : undefined;
  };
};

const email = (value) => {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: [],
      checked: false,
      showModal: false
    };
  }

  handleClick = () => {
    this.setState({ checked: !this.state.checked });
  }

  hideModal = () => {
    window.location.reload();
    return this.setState({ showModal: false });
  }

  onSubmit = (values) => {
    this.setState({ infos: values });
    console.log(this.state.infos);
    if (this.state.checked) {
      this.setState({ showModal: true });
    }
  };

  renderField = ({ input, label, type, placeholder, className, meta: { touched, error, warning } }) => {
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input {...input} placeholder={placeholder} type={type} className={className} />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))}
      </div>
    );
  };

  render () {
    return (
      <div className="container">
        <div className="left-scene">
          <img src="../../assets/photos/upword-logo.svg" alt="upword-logo" />
          <h1>Get More From Your <span>Content</span>.</h1>
          <p>UpWord helps you optimize your brand's publications to reach a larger audience, integrating social content with your website.</p>
        </div>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="form">
          <p className="form-limited-offer">Limited offer</p>
          <h2>Sign up to get your free trial today!</h2>
          <div className="form-group">
            <Field
              className="form-control"
              label="Name"
              name="name"
              type="text"
              placeholder="Please enter your name"
              component={this.renderField}
              validate={[required, minLength(3)]}
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              label="Email"
              name="email"
              type="text"
              placeholder="Please enter your email"
              component={this.renderField}
              validate={[required, email]}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" onClick={this.handleClick} className="form-check-input" />
            <small>
              I agree to the <u>terms and conditions</u>
            </small>
          </div>
          <button type="submit" className="btn-submit">Start my free trial</button>
        </form>
        <Modal infos={this.state.infos} handleClose={this.hideModal} show={this.state.showModal} />
      </div>
    );
  }
}

export default reduxForm({ form: 'signUpForm' })(
  connect(null)(Form)
);
