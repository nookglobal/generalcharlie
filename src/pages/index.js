import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Paragraph from 'components/paragraph';
import Banner from 'components/banner';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Banner data={data.homeJson.hero} />
    <center>
    <br/>
    <br/>
      <Title as="h2" size="large">
        We are here for you. We are open.
      </Title>
      <br/>
      <Paragraph>
          {data.homeJson.address.location}
      </Paragraph>
      <br/>
    </center>
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      hero {
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 300, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      address {
        details
        location
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
