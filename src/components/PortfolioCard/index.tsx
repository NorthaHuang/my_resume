import Link from 'next/link';

import { RatioBox } from '@components/RatioBox';

import S from './styled';
import type { CardProps } from './type';

export const PortfolioCard: React.FC<CardProps> = ({ name, slug, url, imgSrc }) => (
  <S.Wrapper>
    <RatioBox>
      <S.Card bgImage={imgSrc}>
        {/* Mask */}
        <S.Mask className="hover-card-mask">
          {/* Project name */}
          <S.ProjectName className="hover-project-name">{name}</S.ProjectName>

          {slug && (
            <Link passHref href={`/portfolio/${slug}`}>
              <S.ALink>專案說明</S.ALink>
            </Link>
          )}
          {url?.demo && (
            <S.ALink href={url.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </S.ALink>
          )}
          {url?.website && (
            <S.ALink href={url.website} target="_blank" rel="noopener noreferrer">
              在線網站
            </S.ALink>
          )}
          {url?.github && (
            <S.ALink href={url.github} target="_blank" rel="noopener noreferrer">
              <S.IconWrapper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </S.IconWrapper>
            </S.ALink>
          )}
        </S.Mask>
      </S.Card>
    </RatioBox>
  </S.Wrapper>
);
