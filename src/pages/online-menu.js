import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/utils/layout';
import SEO from '../components/utils/seo';
import OnlineItems from '../components/online-menu/Online';
import Disqus from 'disqus-react';

const OnlineMenu = ({ data }) => {
  const disqusShortName = 'bolderspub';
  const disqusConfig = {
    url: `http://localhost:8000`,
    identifier: `nothing`,
    title: 'everything',
  };

  return (
    <Layout>
      <SEO title="Online Menu" keywords={[`gatsby`, `food`, `react`, `order`]} />
      <OnlineItems items={data.menu} />
      <Disqus.DiscussionEmbed config={disqusConfig} shortname={disqusShortName} />
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
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`;
