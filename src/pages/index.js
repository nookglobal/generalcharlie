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
        We are open. You can pick-up.
      </Title>
      <br/>
      <Paragraph>
          {data.homeJson.address.location}
          <br/><br/>
          <strong>Pickup: </strong>
          <a rel="noreffer noopener" href="tel:0451146673">(+61) 451 146 673</a>
          &nbsp;-&nbsp;
          <a href="https://www.ubereats.com/au/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkdlbmVyYWwlMjBDaGFybGllJTIwQ2FmZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpDd29XRzlxdkVtc1J5ODBvMUZNaWt3QSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMzMuODI1ODg4MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE1MS4xOTk2NjkyJTdE" target="_blank" rel="noreferrer noopener">UberEats</a>
          &nbsp;-&nbsp;
          <a href="https://deliveroo.com.au/menu/sydney/crowsnest/general-charlie-cafe?day=today&geohash=r3gx8feyvvrh&time=ASAP" target="_blank" rel="noreferrer noopener">Deliveroo</a>
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
            fluid(maxHeight: 500, quality: 90) {
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
