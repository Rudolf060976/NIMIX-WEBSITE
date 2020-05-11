import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../FontAwesome/library';
import HomeGallery from "../components/HomeGallery/HomeGallery";
import Features from "../components/Features/Features";
import Weoffer from "../components/WeOffer/Weoffer";
import Whytobuy from "../components/Whytobuy/Whytobuy";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />    
    <HomeGallery />   
    <Features />
    <Weoffer />
    <Whytobuy />
  </Layout>
);

export default IndexPage;
