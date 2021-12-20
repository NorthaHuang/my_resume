import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import { Util } from '@styles/util';

type AnchorLinkProps = {
  isActive?: boolean;
  noInteration?: boolean;
};

export const S = {
  Wrapper: styled.header`
    padding: 8px 0;
    backdrop-filter: blur(4px);
    background-color: ${({ theme: { palette } }) => rgba(palette.BLACK, 0.8)};
    z-index: ${({ theme: { zIndex } }) => zIndex.MERCURY};
    position: sticky;
    top: 0;
  `,

  AnchorLink: styled.a<AnchorLinkProps>`
    color: ${({ theme: { palette } }) => palette.WHITE};
    text-decoration: none;
    position: relative;

    ${({ noInteration }) =>
      !noInteration &&
      css`
        &:before {
          content: '';
          width: 0;
          height: 1px;
          margin: auto;
          transition: ${({ theme: { transitions } }) => transitions.duration.standard}ms;
          opacity: 0;
          display: block;
          background-color: ${({ theme: { palette } }) => palette.WHITE};
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
        }

        &:hover {
          color: ${({ theme: { palette } }) => palette.WHITE};

          &:before {
            width: 100%;
            opacity: 1;
          }
        }

        ${({ isActive = false }: AnchorLinkProps) =>
          isActive &&
          css`
            opacity: 0.8;
            pointer-events: none;

            &:before {
              width: 100%;
              opacity: 1;
            }
          `}
      `}
  `,

  // Logo
  ImageWrapper: styled.div`
    overflow: hidden;
    border-radius: 100em;
    line-height: 0;
  `,
  WebsiteName: styled.span`
    color: ${({ theme: { palette } }) => palette.WHITE};
    font-size: 20px;
  `,

  // Menu
  MenuList: styled(Util.FlexBox)`
    margin: 0;
    padding: 0;
    list-style: none;
  `,
};
