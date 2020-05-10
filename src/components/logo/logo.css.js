import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const PageLogo = styled.div`
  img {
    &:last-child {
        display: none;
    }  
    ${MEDIA.TABLET`
        &:last-child {
            display: block;
        }
        &:first-child {
            display: none;
        }
    `};
  }
`;
