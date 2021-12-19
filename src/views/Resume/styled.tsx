import styled from 'styled-components';

import { ExpandParagraph } from '@Src/components/ExpandParagraph';

export default {
  /* Container */
  Wrapper: styled.article`
    width: 100%;
    max-width: 960px;
    margin: auto;
    padding: 24px;
    border-radius: ${({ theme: { shape } }) => shape.borderRadius.blunt}px;
    box-shadow: 1px 2px 4px ${({ theme: { palette } }) => palette.FORD_GRAY};
    background-color: ${({ theme: { palette } }) => palette.GALLERY};

    p {
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `,
  Section: styled.section`
    &:not(:last-of-type) {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 2px solid ${({ theme: { palette } }) => palette.SILVER};
    }
  `,
  SectionTitle: styled.h2`
    font-weight: bold;
  `,

  /* Information */
  InfoImageWrapper: styled.div`
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 100%;

    > img {
      width: 100%;
      height: auto;
      display: block;
    }
  `,
  InformationList: styled.ul`
    > li {
      line-height: 1.2;
    }
  `,

  /* Work Experience */
  CompanyListItem: styled.li`
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  `,
  ExperienceCompanyWrapper: styled.h3`
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: bold;
  `,
  ExperienceMeta: styled.div`
    margin-bottom: 0;
    font-weight: bold;
    line-height: 1.2;
  `,
  OtherContent: styled.div`
    padding-left: 60px;
  `,
  ResponsibilityList: styled.ul`
    && {
      margin-top: 8px;
      list-style: disc;
    }
  `,

  /* Skill / Tech Stack  */
  SkillList: styled.ul`
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 12px;
  `,
  SkillListItem: styled.li`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ theme: { palette } }) => palette.GRAY};
    border-radius: ${({ theme: { shape } }) => shape.borderRadius.standard}px;
    box-shadow: 1px 2px 4px ${({ theme: { palette } }) => palette.SILVER};
    background-color: ${({ theme: { palette } }) => palette.GAINSBORO};

    @media ${({ theme: { breakpoints } }) => breakpoints.tablet} {
      width: calc(50% - 6px);
    }
    @media ${({ theme: { breakpoints } }) => breakpoints.desktop} {
      width: calc(33% - 8px);
    }
  `,
  SkillCategory: styled.h4`
    font-weight: bold;
  `,
  SkillCategoryList: styled.ul`
    && {
      padding-left: 1.5rem;
      list-style: disc;
    }
  `,
  SkillCategoryListItem: styled.li`
    &:not(:last-of-type) {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 0;
      line-height: 1.2;
    }
  `,
  SkillName: styled.p`
    font-weight: bold;
  `,
  SkillDescription: styled(ExpandParagraph)`
    && {
      margin-top: 4px;
      line-height: 1.2;
    }
  `,

  /* Education */
  SchoolImageWrapper: styled.div`
    overflow: hidden;
    border-radius: 100%;
    line-height: 0;
  `,
  SchoolName: styled.h3`
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: bold;
  `,
};
