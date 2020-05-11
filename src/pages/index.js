import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../FontAwesome/library';
import HomeGallery from "../components/HomeGallery/HomeGallery";
import Features from "../components/Features/Features";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <HomeGallery />   
    <Features />
  </Layout>
);

export default IndexPage;
