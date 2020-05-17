import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import Paragraph from 'components/paragraph';

export const Container = styled.section`
    display: flex;
    position: relative;
    flex-direction: column;
    max-height: 500px;
`

export const ImageContainer = styled.div`
    /* position: absolute; */
    /* width: 100vh; */
    position: absolute;
    background-color: rgb(21, 21, 21, 0.5);
    z-index: 1;
    width: 100%;
    height: 100%;
`;

export const HeroText = styled.h1`
    z-index: 1;
    position: absolute;
    color: white;
    font-size: 3.2rem;
    text-align: center;
    top: 35%;

    width: 100%;
    ${MEDIA.TABLET`
        font-size: 2.6rem;
    `};
`;

export const SubText = styled(Paragraph)`
    color: #ccc;
    text-align: center;
    padding-top: 1em;
`;