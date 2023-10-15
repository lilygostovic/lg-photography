import styled, { css } from 'styled-components';
import {
  color,
  type ColorProps,
  flexbox,
  type FlexboxProps,
  layout,
  type LayoutProps,
  space,
  type SpaceProps,
  typography,
  type TypographyProps,
} from 'styled-system';

export type TextVariant = "title" | "subtitle" | "header" | "subHeader";

type StyledTextProps = {
  variant: TextVariant;
} & ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const StyledText = styled.text<StyledTextProps>`
  ${({ variant }) => {
    switch (variant) {
      case "title":
        return css`
          font-family: "AppleGothic";
          font-size: 18px;
          line-height: 48px;
          font-weight: lighter;
        `;
      case "subtitle":
        return css`
          font-family: "AppleGothic";
          font-size: 12px;
          color: #7b7b7b;
        `;
      case "header":
        return css`
          font-family: "AppleGothic";
          font-size: 22px;
          margin-top: 20px;
          line-height: 32px;
          font-weight: bold;
          color: black;
        `;
      case "subHeader":
        return css`
          font-family: "AppleGothic";
          font-size: 12px;
          line-height: 32px;
          color: darkgray;
        `;
    }
  }}

  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
