import styled from 'styled-components';
import Paragraph from 'components/paragraph';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`;

export const Copy = styled(Paragraph)`
    text-align: right;
    font-size: 1rem;
    margin-bottom: 0px;
    line-height: 1.1rem;
`
