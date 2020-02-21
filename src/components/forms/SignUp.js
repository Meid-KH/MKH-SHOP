import React, { Component } from "react";
import InputField from "../elements/InputField";
import Button from "../elements/Button";

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
      <div className="_form sign_up">
        <form onSubmit={this.handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <InputField
            label="Name"
            placeholder="Your name.."
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <InputField
            label="Email"
            placeholder="Your email.."
            type="email"
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
            <Button type="submit" classes="button _signup" content="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
