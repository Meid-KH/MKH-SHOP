import React, { Component } from "react";
import InputField from "../InputField";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { email, password } = this.state;

    return (
      <div className="sign_in">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="Email"
            type="text"
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
          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
