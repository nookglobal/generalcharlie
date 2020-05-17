import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import TabMenu from 'components/tab-menu';

const Menu = ({ data }) => (
  <Layout>
    <Head pageTitle={data.menuJson.title} />
    <TabMenu categories={data.menuJson.categories} items={data.menuJson.items} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.menuJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Menu.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Menu;

export const query = graphql`
  query MenuQuery {
    menuJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      categories {
        title
        tag
        description {
          childMarkdownRemark {
            html
          }
        }
      }
      items {
        name
        price
        tags
        description
      }
    }
  }
`;
