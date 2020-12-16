import React, { Component } from 'react';
import { addToMailchimp } from 'gatsby-plugin-mailchimp';
import styles from './emailListForm.module.scss';

class ContactSubscribe extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const result = addToMailchimp(this.state.email);
    this.setState({ message: result.msg });
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        name="subscribeForm"
        method="POST"
        className={styles.emailListForm}
      >
        <div className="message" dangerouslySetInnerHTML={{ __html: this.state.message }} />
        <h2>Subscribe to my email list</h2>
        <div className={styles.Wrapper}>
          <input
            placeholder="Email address"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    );
  }
}

export default ContactSubscribe;
