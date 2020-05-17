import styled, { css } from 'styled-components';
import Paragraph from 'components/paragraph';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
`;

export const StyledList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
`;

export const StyledLi = styled.li`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin-left: 2rem;
  cursor: pointer;
  ${({ isSelected }) => isSelected && css`
    text-decoration: underline;
    font-weight: bold;
  `}
`

export const CategoryBody = styled.section`
    display: flex;
    flex-direction: column;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
`;

export const MenuContainer =styled.section`
    flex: 1;
    padding: 10px;
    width: 100%;
    min-height: 100vh;
    background-color: #eee;
    border-radius: 4px;
    position: relative;
    align-items: center;
    justify-content: center;
    ul {
        width: 100%;
        h3 {
            margin: 20px 20px;
            text-align: center;
            font-style: italic;
            text-decoration: underline;
        }
        li {
            margin: 20px 20px;
            text-align: left;

            /* Markdown */
            .container {
                display: flex;
                align-items: center;
            }
            h2 {
                font-weight: bold;
            }
            .dots {
                flex: 1;
                border-bottom: 1px dashed #00000057;
                margin: 0px 8px;
                height: 1px;
                min-width: 20px;
            }
            span {
                font-weight: bold;
            }
            p {
                margin: 10px 0px;
                font-size: 0.9em;
                font-style: italic;
                line-height: 1.3em;
            }
        }
    }
`;

export const MenuList = styled.ul`
    width: 100%;
    display: none;
    ${({ isVisible }) => isVisible && css`
        display: block;
    `}
`;

export const MenuItems = styled.li`
    margin: 20px 0px;
    text-align: center;
`;

export const Sidebar = styled.section`
    flex: 1;
    position: relative;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 300px;

    ${MEDIA.TABLET`
        display: none;
    `};
`;

export const markdownCss = css`
    text-align: center;
    line-height: normal;
    ul {
        h3 {
            font-weight: bold;
            margin: 10px;
        }
        li {
            margin: 10px 0px;
            text-align: center;
            text-transform: italic;
        }
    }
`;
export const DescriptionBody = styled.div`
    display: none;
    ${MEDIA.TABLET`
        margin-top: 20px;
        display: block;
        ${markdownCss}
    `};
`;

export const SidebarBody = styled.div`
    position: fixed;
    padding-left: 20px;
    width: 300px;
    box-sizing: border-box;
    ${markdownCss}
`;
