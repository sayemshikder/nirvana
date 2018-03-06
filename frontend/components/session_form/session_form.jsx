import React from 'react';

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
      <ul>
        { errorItems }
      </ul>
    );
  }

  render() {
    const { email, password } = this.state;
    const { formType } = this.props;

    return (
      <div>
        <h1>{ formType }</h1>
        <form>
          { this.renderErrors() }
          <label for="email">Email Address</label>
          <input type="text" onChange={(e) => this.handleChange(e, 'email')} value={email} />

          <label for="password">Password</label>
          <input type="password" onChange={(e) => this.handleChange(e, 'password')} value={password} />

          <input type="submit" value={formType} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
