import styled from 'styled-components';
import Paragraph from 'components/paragraph';
import Nav from 'components/footer/nav';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  flex-direction: row;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  ${MEDIA.TABLET`
    flex-direction: column;
    border-top: 1px solid #ccc;
  `};
`;

export const NavContainer = styled(Nav)`
  ${MEDIA.TABLET`
      flex: 1;
      text-align: center;
      padding-top: 1em;
    `};
`;

export const Copy = styled(Paragraph)`
    text-align: right;
    font-size: 1rem;
    margin-bottom: 0px;
    line-height: 1.1rem;

    ${MEDIA.TABLET`
      flex: 1;
      text-align: center;
      padding-top: 1em;
    `};
`
