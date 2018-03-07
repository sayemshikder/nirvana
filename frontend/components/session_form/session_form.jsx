import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleChange(e, field) {
    this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    const { errors } = this.props;
    const errorItems = errors.map((err, i) => (
      <li key={`${err}-${i}`}>{err}</li>
    ));

    return (
      <ul className="modal_errors_ul">
        { errorItems }
      </ul>
    );
  }

  renderModalFooter() {
    const { formType } = this.props;
    if (formType === 'Log In') {
      return (
        <div className="modal_footer">Don't have an account? <Link className="footer_link" to="/signup">Sign Up</Link></div>
      )
    } else {
      return (
        <div className="modal_footer">Already have an account? <Link className="footer_link" to="/login">Sign In</Link></div>
      )
    }
  }
  render() {
    const { email, password } = this.state;
    const { formType } = this.props;

    return (
      <div className="session_modal">
        <div className="modal_screen"></div>

        <div className="modal_content">
          <div className="close-icon">✕</div>

          <h1>{ formType }</h1>
          <form onSubmit={ this.handleSubmit }>
            { this.renderErrors() }

            <div className="input_group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="text" onChange={(e) => this.handleChange(e, 'email')}
                value={email} placeholder="name@company.com" />
            </div>

            <div className="input_group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" onChange={(e) => this.handleChange(e, 'password')}
                value={password} placeholder="Password"/>
            </div>

            <input id="modal_submit" type="submit" value={formType} />
          </form>

          { this.renderModalFooter() }
        </div>
      </div>
    );
  }
}

export default SessionForm;
