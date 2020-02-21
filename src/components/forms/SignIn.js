import React, { Component } from "react";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

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
      <div className="_form sign_in">
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">Sign In</h2>
          <InputField
            label="Email"
            placeholder="Your Email.."
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <InputField
            label="Password"
            placeholder="Your password.."
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="d-flex flex-wrap justify-content-between pt-3">
            <Button type="submit" classes="button _signin" content="Sign in" />
            <Button
              classes="button google_signin active"
              content="Sign in with Google"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
