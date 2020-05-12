import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import '../FontAwesome/library';
import HomeGallery from "../components/HomeGallery/HomeGallery";
import Features from "../components/Features/Features";
import Weoffer from "../components/Weoffer/Weoffer";
import Whytobuy from "../components/Whytobuy/Whytobuy";
import News from "../components/News/News";
import Gototop from "../components/Gototop/Gototop";
//import image from '../images/BACK1.jpg';


const IndexPage = () => (
  <Layout >
    <SEO title="Home" />    
    <HomeGallery />
    <Features />
    <Weoffer />
    <Whytobuy />
    <News />
    <Gototop />
  </Layout>
);

export default IndexPage;
