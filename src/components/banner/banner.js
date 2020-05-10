import React from 'react';
import { Container, ImageContainer, HeroText } from './banner.css';
import Img from 'gatsby-image';
import Box from 'components/box';
import Title from 'components/title';
import Paragraph from 'components/paragraph';

export const Banner = ({ data }) => (
    <Container>
      <ImageContainer aria-hidden='true'>&nbsp;</ImageContainer>
      <Img fluid={data.image ? data.image.childImageSharp.fluid : {}} alt={'Welcome to General Charlie'} />
      <HeroText>
          {data.copy}
      </HeroText>
    </Container>
)

export default Banner;