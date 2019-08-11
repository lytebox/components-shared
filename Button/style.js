import styled, { css } from "styled-components";
import { Color } from "../_theme";

const ButtonWrapper = styled.button`
  color: ${Color.white};
  background: ${Color.blue};
  border: 1px solid ${Color.blue};
  border-radius: 1em;
  padding: 0.2em 1em;
  cursor: pointer;
  transition: all 0.2s;

  ${props =>
    props.large &&
    css`
      font-size: 2em;
      border-width: 4px;
    `}

  ${props =>
    props.invert &&
    css`
      border: 1px solid ${Color.white};
      &:hover {
        border: 1px solid ${Color.blue};
      }

      ${props.outline
        ? css`
            background: ${Color.blue};
            color: ${Color.white};
            &:hover {
              background: ${Color.white};
              color: ${Color.blue};
            }
          `
        : css`
            background: ${Color.white};
            color: ${Color.blue};
            &:hover {
              background: ${Color.blue};
              color: ${Color.white};
            }
          `}
    `}
`;

const FullWidthButtonWrapper = styled.button`
  color: ${Color.greyDark};
  background: ${Color.grey};
  width: 100%;
  padding: 0.5em 1em;
  text-align: center;
  font-size: 1.2em;
  border: 0;
`;

export { ButtonWrapper, FullWidthButtonWrapper };
