import styled, { css } from "styled-components";

const BIG_IMAGE = css`
  width: 390px;
  height: 205px;
`;

const DEFAULT_IMAGE = css`
  width: 152px;
  height: 80px;
`;

const IMAGE_STYLE = {
  default: DEFAULT_IMAGE,
  big: BIG_IMAGE,
};

const Image = styled.img`
  object-fit: cover;
  ${({ size = "default" }) => IMAGE_STYLE[size]}
`;

export { Image };
