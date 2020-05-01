import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3002/send", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    var linkedin = (
      <a
        target="_blank"
        href="https://www.linkedin.com/in/deonte-cooper/"
        rel="noopener noreferrer"
        alt="LinkedIn Profile page"
      >
        https://www.linkedin.com/in/deonte-cooper/
      </a>
    );
    var twitter = (
      <a
        target="_blank"
        href="https://twitter.com/DJC00P23"
        rel="noopener noreferrer"
        alt="Twitter Profile page"
      >
        https://twitter.com/DJC00P23
      </a>
    );
    return (
      <div className="form-container">
        <h1>Contact me</h1>
        <p className="form-control url-link">
          Email: deonte.cooper12 at gmail.com
        </p>
        <p className="form-control url-link">LinkedIn: {linkedin}</p>
        <p className="form-control url-link">Twitter: {twitter}</p>
      </div>

      // Contact Form Not fully functioning yet

      // <div className="form-container">
      //   <form
      //     id="contact-form"
      //     onSubmit={this.handleSubmit.bind(this)}
      //     method="POST"
      //     className="form"
      //   >
      //     <div className="form-group">
      //       <label htmlFor="name">Name</label>
      //       <input
      //         type="text"
      //         className="form-control"
      //         value={this.state.name}
      //         onChange={this.onNameChange.bind(this)}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="EmailInput">Email address</label>
      //       <input
      //         type="email"
      //         className="form-control"
      //         aria-describedby="emailHelp"
      //         value={this.state.email}
      //         onChange={this.onEmailChange.bind(this)}
      //       />
      //     </div>
      //     <div className="form-group">
      //       <label htmlFor="message">Message</label>
      //       <textarea
      //         className="form-control"
      //         rows="5"
      //         value={this.state.message}
      //         onChange={this.onMessageChange.bind(this)}
      //       ></textarea>
      //     </div>
      //     <button type="submit" className="sub">
      //       Submit
      //     </button>
      //   </form>
      // </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
