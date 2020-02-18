import React, { Component } from "react";
import Layout from "../components/Layout";
import SignIn from "../components/forms/SignIn";
import SignUp from "../components/forms/SignUp";

class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <section>
          <h1>Sign in / Sign up</h1>
          <div className="forms_wrapper">
            <SignIn />
            <SignUp />
          </div>
        </section>
      </Layout>
    );
  }
}

export default LoginPage;
