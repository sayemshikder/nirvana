import React from 'react';
import { Link } from 'react-router-dom';

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/signup',
      state: { email: this.state.email }
    });
  }

  render() {
    const { email } = this.state;

    return (
      <div className="home_content">
        <div className="home_squeeze">
          <h1 className="home_masthead">Move work forward</h1>
          <h3 className="home_subhead">Nirvana is the easiest way for teams to track their work—and get results.</h3>

          <form onSubmit={this.handleSubmit} className="home_form_group">
            <input id="email" className="home_email_input" type="email" onChange={this.updateEmail}
              value={email} placeholder="name@company.com" />
            <input type="submit" value="Get Started" className="home_get_started" />
          </form>
        </div>

        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    );
  }
}

export default HomeContent;
