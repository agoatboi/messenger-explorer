import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

type themeOptions = {
  [key: string]: SerializedStyles;
};

const baseStyle = () => {
  return css`
    font-size: 24px;
    border-radius: 50px;
    background-color: #ffffff33;
    display: flex;
    width: fit-content;
    padding: 4px;

    svg {
      align-self: center;
    }

    span {
      padding-left: 4px;
    }
  `;
};

const ButtonTheme: themeOptions = {
  DEFAULT: css`
    svg {
      fill: white;
    }
  `,
};

type ButtonProps = {
  useTheme: string;
};

const getAllStyle = ({ useTheme }: ButtonProps) => {
  return css`
    ${baseStyle()}
    ${ButtonTheme[useTheme]}
  `;
};

export const StyledButton = styled.div<ButtonProps>`
  ${getAllStyle}
`;
