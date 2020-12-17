import React from "react";
import { Layout, SEO, Home } from "../components";
import { graphql } from "gatsby";

export default props => (
  <Layout>
    <SEO title="Booking Page" />
    <Home data={props.data} />
  </Layout>
);

export const data = graphql`
  query {
    slide1: file(relativePath: { eq: "restaurant/pubhub2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide2: file(relativePath: { eq: "restaurant/beer.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide3: file(relativePath: { eq: "restaurant/rest.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    slide4: file(relativePath: { eq: "restaurant/burger.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
