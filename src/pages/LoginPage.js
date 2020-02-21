import React, { Component } from "react";
import Layout from "../components/Layout";
import SignIn from "../components/forms/SignIn";
import SignUp from "../components/forms/SignUp";
import "../styles/login.scss";

class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <section className="mt-3">
          <h1 className="title mb-5">Sign in / Sign up</h1>
          <div className="forms_wrapper">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <SignIn />
              </div>
              <div className="col-lg-7 col-md-6">
                <SignUp />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default LoginPage;
