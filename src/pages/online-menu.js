import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import OnlineItems from '../components/online-menu/online';
import { Disqus } from 'gatsby-plugin-disqus';

const OnlineMenu = ({ data }, props) => {
  const disqusShortName = process.env.GATSBY_DISQUS_NAME;
  const disqusConfig = {
    url: `http://localhost:8000/${props.location}`,
    identifier: `${props.location}`,
    title: 'everything',
  };
  return (
    <Layout>
      <SEO title="Online Menu" keywords={[`gatsby`, `food`, `react`, `order`]} />
      <OnlineItems items={data.menu} />
      <Disqus config={disqusConfig} shortname={disqusShortName} />
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
