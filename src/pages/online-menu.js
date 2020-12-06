import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import OnlineItems from '../components/online-menu/online';
import { Disqus } from 'gatsby-plugin-disqus';

const OnlineMenu = ({ data }) => {
  // const { markdownRemark: post } = data;

  const disqusConfig = {
    url: `http://localhost:8000`,
    identifier: 'nothing',
    title: 'nothin',
  };

  return (
    <Layout>
      <SEO title="Online Menu" keywords={[`gatsby`, `food`, `react`, `order`]} />
      <OnlineItems items={data.menu} />
      <Disqus config={disqusConfig} />
    </Layout>
  );
};

export default OnlineMenu;

export const data = graphql`
  query {
    menu: allContentfulMenuItem {
      edges {
        node {
          id
          title
          desc {
            desc
          }
          price
          category
          image {
            fixed(width: 100, height: 50) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
