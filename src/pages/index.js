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
import { useAuth0 } from '../auth/react-auth0-wrapper';


const IndexPage = () => {
 
  const isBrowser = typeof window !== "undefined";
  
  const auth0 = useAuth0();
  
  if (isBrowser && auth0 && auth0.loading) return <div>Loading ....</div>;   

  return (
    <Layout >      
    <SEO title="Home" />    
    <HomeGallery />
    <Features />
    <Weoffer />
    <Whytobuy />
    <News />
    <Gototop scrollPointId="home-scroll-point" />
    </Layout>
  );

}

export default IndexPage;
