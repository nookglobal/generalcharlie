import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Paragraph from 'components/paragraph';
import Gallery from 'components/gallery';
import Map from 'components/map';

const Contact = ({ data }) => (
  <Layout>
    <Map />
    <br/><br/>
    <center>
      <Paragraph>
          {data.contactJson.address.location}
          <br/><br/>
          <strong>Pickup: </strong>
          <a rel="noreffer noopener" href="tel:0451146673">(+61) 451 146 673</a>
          &nbsp;-&nbsp;
          <a rel="noreffer noopener" href="https://www.ubereats.com/au/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkdlbmVyYWwlMjBDaGFybGllJTIwQ2FmZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpDd29XRzlxdkVtc1J5ODBvMUZNaWt3QSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMzMuODI1ODg4MSUyQyUyMmxvbmdpdHVkZSUyMiUzQTE1MS4xOTk2NjkyJTdE">UberEats</a>
          &nbsp;-&nbsp;
          <a rel="noreffer noopener" href="https://deliveroo.com.au/menu/sydney/crowsnest/general-charlie-cafe?day=today&geohash=r3gx8feyvvrh&time=ASAP">Deliveroo</a>
      </Paragraph>
      <br/>
    </center>
    <Gallery items={data.contactJson.gallery} />
  </Layout>
);

Contact.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Contact;

export const query = graphql`
  query ContactQuery {
    contactJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      address {
        details
        location
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
