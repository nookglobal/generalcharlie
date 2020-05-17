import React from 'react';
import { Container, ImageContainer, HeroText, SubText } from './banner.css';
import Img from 'gatsby-image';

export const Banner = ({ data }) => (
    <Container>
      <ImageContainer aria-hidden='true'>&nbsp;</ImageContainer>
      <Img fluid={data.image ? data.image.childImageSharp.fluid : {}} objectFit="cover" alt={'Welcome to General Charlie'} />
      <HeroText>
          {data.copy}
        <SubText>
          <u>Tues-Fri</u> 7am-3pm - <u>Sat-Sun</u> 8am-2pm
        </SubText>
      </HeroText>
    </Container>
)

export default Banner;