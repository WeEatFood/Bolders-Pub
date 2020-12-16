import React from 'react';
import { Layout, SEO, Online } from '../components';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';

export default ({ data }) => {
  const disqusShortName = 'bolderspub';
  const disqusConfig = {
    url: `http://localhost:8000`,
    identifier: `nothing`,
    title: 'everything',
  };

  return (
    <Layout>
      <SEO title="Online Menu" keywords={[`gatsby`, `food`, `react`, `order`]} />
      <Online items={data.menu} />
      <Disqus.DiscussionEmbed config={disqusConfig} shortname={disqusShortName} />
    </Layout>
  );
};

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
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
