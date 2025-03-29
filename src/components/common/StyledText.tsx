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

export type TextVariant =
  | "title"
  | "subtitle"
  | "header"
  | "subHeader"
  | "journalTitle"
  | "journalSubtitle"
  | "suggestionSectionTitle"
  | "suggestionTitle"
  | "suggestionSubtitle";

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
      case "journalTitle":
        return css`
          font-family: "AppleGothic";
          font-size: 40px;
          margin-top: 300px;
          font-weight: bolder;
          color: black;
        `;
      case "journalSubtitle":
        return css`
          font-family: "AppleGothic";
          font-size: 12px;
          margin-top: 30px;
          margin-bottom: 250px;
          font-weight: bold;
          color: black;
        `;
      case "suggestionSectionTitle":
        return css`
          font-family: "AppleGothic";
          font-size: 20px;
          color: black;
        `;
      case "suggestionTitle":
        return css`
          font-family: "AppleGothic";
          font-size: 14px;
          font-weight: lighter;
          color: #1c1c1c;
        `;
      case "suggestionSubtitle":
        return css`
          font-family: "AppleGothic";
          font-size: 11px;
          color: #7b7b7b;
        `;
    }
  }}

  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
