import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
// import Image from "../components/image"
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/backgroundSection";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={ [
      `gatsby`,
      `restaurant`,
      `pub`,
      `react`,
      `group projects`,
      `fun in the sun`] } />
  </Layout>
);

export const query = graphql`
    {
        img: file(relativePath:{eq: "Restaurant/pubhub2.jpg"}){
            childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_traceSVG
                }
            }
        }
    }
`;

export default IndexPage;
