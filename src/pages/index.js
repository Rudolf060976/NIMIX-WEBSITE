import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../FontAwesome/library';
import HomeGallery from "../components/HomeGallery/HomeGallery";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <HomeGallery />   
  </Layout>
);

export default IndexPage;
