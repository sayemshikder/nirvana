import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    let preloadedEmail;
    if (this.props.location.state) {
      preloadedEmail = this.props.location.state.email;
    }

    this.initialFormState = {
      name: '',
      email: preloadedEmail || '',
      password: ''
    };
    this.state = this.initialFormState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.setState(this.initialFormState);
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
      <li className="modal_errors_li" key={`${err}-${i}`}>{err}</li>
    ));

    return (
      <ul className="modal_errors_ul">
        { errorItems }
      </ul>
    );
  }

  renderNameField() {
    const { formType } = this.props;
    const { name } = this.state;

    if (formType === 'Sign Up') {
      return (
        <div className="input_group">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" onChange={(e) => this.handleChange(e, 'name')}
            value={name} placeholder="Ola Nordmann" />
        </div>
      );
    }
  }

  renderModalFooter() {
    const { formType } = this.props;

    if (formType === 'Log In') {
      return (
        <div className="modal_footer">Don't have an account? <Link className="footer_link" to="/signup">Sign Up</Link></div>
      );
    }
    return (
      <div className="modal_footer">Already have an account? <Link className="footer_link" to="/login">Sign In</Link></div>
    );
  }

  render() {
    const { email, password } = this.state;
    const { formType } = this.props;

    return (
      <div className="session_modal">
        <Link className="modal_screen_link" to="/"><div className="modal_screen"></div></Link>

        <div className="modal_content">
          <div className="close-icon"><Link to="/">✕</Link></div>

          <h1>{ formType }</h1>
          <form onSubmit={ this.handleSubmit }>
            { this.renderErrors() }

            { this.renderNameField() }

            <div className="input_group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" onChange={(e) => this.handleChange(e, 'email')}
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
