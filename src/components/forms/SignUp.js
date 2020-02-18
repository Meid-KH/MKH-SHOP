import React, { Component } from "react";
import InputField from "../InputField";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = evt => {
    evt.preventDefault();
    console.log("handle change !");
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log("handle Submit !");
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="sign_up">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
