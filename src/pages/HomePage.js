import React, { Component } from "react";
import Layout from "../components/Layout";
import CollectionsList from "../components/catalog/CollectionsList";

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        <CollectionsList />
      </Layout>
    );
  }
}

export default HomePage;
