import Image from 'next/image';

import Grid from '@components/layout/Grid';
import { Util } from '@styles/util';

import { S } from './styled';

const resumeData = {
  info: {
    name: '黃嘉函, Northa',
    title: '前端工程師',
    location: '台灣, 基隆市',
    email: 'sonic800122@gmail.com',
  },
  sns: [
    {
      url: 'https://github.com/NorthaHuang',
      alt: 'GitHub Logo',
      src: '/images/sns_logo/github.png',
    },
    {
      url: 'www.linkedin.com/in/chia-han-huang-785639118',
      alt: 'LinkedIn Logo',
      src: '/images/sns_logo/linkedin.png',
    },
    {
      url: 'https://twitter.com/NorthaHuang',
      alt: 'Twitter Logo',
      src: '/images/sns_logo/twitter.png',
    },
  ],
  workExperience: [
    // SparkAmplify
    {
      company: {
        name: 'SparkAmplify',
        url: 'https://www.sparkamplify.com/',
      },
      title: '軟體工程師 (前端)',
      duration: '2020/10 ~ 仍在職',
      image: {
        src: '/images/company_logo/sparkamplify.jpg',
        alt: 'SparkAmplify 公司 Logo',
      },
      responsibility: [
        '教導實習生技術並協助其一同加入開發。',
        '幫助公司 Google Cloud Function 讀取速度從 9 秒提升到 3 秒。',
        '和後端工程師使用 Notion 協作、制定 API。',
        '使用 Redux-Saga 和 Axios 串接後端 API。',
        '維護 GitLab CI/CD。',
        '串接 GTM tags 並將後端送來的 GA 數據製作 Dashboard 頁面。',
        '偶爾協助後端開發製作 Model、Controller 和開發 API。',
        '使用 Lerna 管理 49 個存放於 NPM 的 Packages。',
        '引入 TSDoc，讓註解也能成為文件，也更方便查看。',
      ],
    },
    // 歐銀數位科技
    {
      company: {
        name: '歐銀數位科技',
      },
      title: '前端工程師',
      duration: '2019/7 ~ 2020/1 (6 個月)',
      image: {
        src: '/images/company_logo/o2gether.jpg',
        alt: '歐銀數位科技公司 Logo',
      },
      responsibility: [
        '開發和維護後台管理系統。',
        '使用 jQuery 的 Ajax 串接後端 API。',
        '使用 Vue 2 製作 i18n 的代號搜尋器供內部使用，加速開發流程。',
      ],
    },
    // 才式創意科技
    {
      company: {
        name: '才式創意科技',
        url: 'http://www.greatone.com.tw/',
      },
      title: '網頁設計師 (前端)',
      duration: '2016/7 ~ 2019/5 (2 年 10 個月)',
      image: {
        src: '/images/company_logo/greatone.jpg',
        alt: '才式創意科技公司 Logo',
      },
      responsibility: [
        '將 PhotoShop 設計稿製成靜態 RWD、AWD 網頁給後端工程師套版。',
        '引入 SCSS 工具，節省開發時間。',
        '使用 PhotoShop 來 Resize、調整圖檔，確保能夠正確且清楚的顯示。',
        '適當的壓縮圖檔以提升讀取效能。',
        '製作前端的 boilerplate 讓每個專案都能省下架構初始化的時間。',
        '使用 jQuery 製作符合公司常用設計的 Lightbox Plugin，避免大家重造輪子。',
        '設計使用者互動的動態、使用 TweenMax Plugin 設計和製作進場動畫。',
        '不停地切版。',
      ],
    },
  ],
  skills: [
    {
      category: '基本',
      contents: [
        {
          name: 'HTML5',
          desc: ``,
        },
        {
          name: 'CSS3',
          desc: ``,
        },
      ],
    },
    {
      category: '程式語言',
      contents: [
        {
          name: 'ES5, ES6+',
          desc: ``,
        },
        {
          name: 'Typescript',
          desc: ``,
        },
      ],
    },
    {
      category: '前端框架',
      contents: [
        {
          name: 'React',
          desc: ``,
        },
        {
          name: 'Redux-Saga',
          desc: ``,
        },
        {
          name: 'Next.js',
          desc: ``,
        },
      ],
    },
    {
      category: '樣式',
      contents: [
        {
          name: 'Styled-Components',
          desc: ``,
        },
        {
          name: 'SASS / SCSS',
          desc: ``,
        },
      ],
    },
    {
      category: 'API',
      contents: [
        {
          name: 'RESTful API',
          desc: ``,
        },
        {
          name: 'Axios',
          desc: ``,
        },
      ],
    },
    {
      category: 'Library',
      contents: [
        {
          name: 'Lodash',
          desc: ``,
        },
        {
          name: 'Chart.js',
          desc: ``,
        },
        {
          name: 'jQuery',
          desc: ``,
        },
      ],
    },
    {
      category: '與設計師協作',
      contents: [
        {
          name: 'Zeplin',
          desc: ``,
        },
        {
          name: 'PhotoShop',
          desc: ``,
        },
      ],
    },
    {
      category: '與後端工程師協作',
      contents: [
        {
          name: 'Swagger',
          desc: ``,
        },
      ],
    },
    {
      category: '其它',
      contents: [
        {
          name: 'Git (Terminal)',
          desc: ``,
        },
        {
          name: 'Git-Flow',
          desc: ``,
        },
        {
          name: '基礎 Node.js, Express',
          desc: ``,
        },
        {
          name: 'ESLint (Airbnb)',
          desc: ``,
        },
        {
          name: 'Lerna (Monorepo manager)',
          desc: ``,
        },
      ],
    },
  ],
  autobiography: [
    `目前在 SparkAmplify 擔任軟體工程師，負責前端；但有時還是會需要分擔後端的工作，從資料庫和 Model 一路串到前端；這對於第一次接觸後端的我有點緊張又興奮。
在這裡有很多機會可以接觸到前端之外的東西，例如：VPN、GCP/AWS、GitLab 的 CI/CD、Code Review...... 等等，讓我對於陌生的事物不再那麼容易害怕，這是新創很有趣的特點！
因為公司是美商的關係，讓我理解到英文真的非常非常的重要，特別是在口語溝通上；於是加強自己英文能力這件事也進入了長期計畫之中。`,

    `前一份於歐銀數位科技的工作主要負責後台開發。
由於後台的樣式單純，所以切版的作業少；主要都是和後端討論 API 的規格以及理解各個功能的業務邏輯，最後使用才 AJAX 實際串接 API。
這次接觸到中型的包網平台才發現，原來串接 API 並沒有想像中的單純，而是要做許多準備跟理解業務邏輯才能夠做好串接；串接後還要處理各種例外事件、Response 順序處理和 Loading 處理，也因此讓我進步了很多!`,

    `第一份在才式創意科技的工作內容為專職切版給後端套版。
由於為接案公司的緣故，案子不少且時間短，同時間還需要維護現有專案，因此懂得如何分辨輕重緩急來排程，快速解決問題及突發狀況的能力開始培養了起來。
身為新鮮人不免會有應付不來的狀況發生，所以下班時間會做些提升效率的工作: 邊看 Emmet Cheat Sheet 邊寫 CSS、撰寫 boilerplate、撰寫 Plugin、將常用的模組先寫好(Hamburger 之類)、撰寫 Snippets...... 等等；理解到不能傻傻的努力，而是要聰明效率的工作。
在近 3 年經歷中，從完全沒有切版經驗到後來制定前端部門的作業標準、引入新的技術工具、協助同事尋找和處理 Bug，那種貢獻的成就感讓我越來越享受在團隊和工作當中，老闆和主任也都很滿意。
雖然當初公司沒有使用框架或前後端分離，但因著好奇開始摸索框架、Webpack、API 串接...... 等等 Modern Web 技術；在這途中接觸的框架是從 Vue 開始，雖然第一次使用 terminal 開發前端讓我吃足了苦頭，但真的很有成就感！ 後來因為想要試著架設部落格，於是從 Gatsby 入門開始投入了 React 的領域。`,
  ],
};

const Resume: React.FC = () => {
  return (
    <Grid>
      <Util.PageTitle>履歷</Util.PageTitle>

      <S.Wrapper>
        {/* ----- Information -----*/}
        <S.Section>
          {/* Name, Description */}
          <Util.FlexBox align="flex-start" justify="flex-start" gap="0 20px">
            <S.InfoImageWrapper>
              <img src="/images/avatar.jpg" alt="Northa 的照片" />
            </S.InfoImageWrapper>

            <div>
              <Util.FlexBox gap="0 20px">
                <S.SectionTitle>{resumeData.info.name}</S.SectionTitle>
              </Util.FlexBox>

              {/* Link */}
              <Util.FlexBox as="ul" align="flex-start" justify="flex-start" gap="0 12px">
                {resumeData.sns.map(({ url, alt, src }) => (
                  <li key={src}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <Image src={src} width={24} height={24} alt={alt} />
                    </a>
                  </li>
                ))}
              </Util.FlexBox>

              {/* Information */}
              <S.InformationList>
                <li>{resumeData.info.title}</li>
                <li>{resumeData.info.location}</li>
                <li>
                  <a href={`mailto:${resumeData.info.email}`}>{resumeData.info.email}</a>
                </li>
              </S.InformationList>
            </div>
          </Util.FlexBox>
        </S.Section>

        {/* ----- Work Experience -----*/}
        <S.Section>
          <S.SectionTitle>工作經歷</S.SectionTitle>

          <ol>
            {resumeData.workExperience.map((data) => (
              <S.CompanyListItem key={data.company.name}>
                <S.ExperienceCompanyWrapper>
                  <Util.FlexBox justify="flex-start" gap="0 12px">
                    <img src={data.image.src} width="48" height="48" alt={data.image.alt} />
                    {data.company?.url ? (
                      <a href={data.company.url} target="_blank" rel="noopener noreferrer">
                        {data.company.name}
                      </a>
                    ) : (
                      <p>{data.company.name}</p>
                    )}
                  </Util.FlexBox>
                </S.ExperienceCompanyWrapper>
                <S.OtherContent>
                  <S.ExperienceMeta>
                    {data.title}, {data.duration}
                  </S.ExperienceMeta>
                  <S.ResponsibilityList>
                    {data.responsibility.map((content) => (
                      <li key={content}>{content}</li>
                    ))}
                  </S.ResponsibilityList>
                </S.OtherContent>
              </S.CompanyListItem>
            ))}
          </ol>
        </S.Section>

        {/* ----- Skill / Tech Stack -----*/}
        <S.Section>
          <S.SectionTitle>技能</S.SectionTitle>

          <S.SkillList>
            {resumeData.skills.map((skill) => (
              <S.SkillListItem key={skill.category}>
                <S.SkillCategory>{skill.category}</S.SkillCategory>
                <S.SkillCategoryList>
                  {skill.contents.map((content) => (
                    <S.SkillCategoryListItem key={content.name}>
                      <S.SkillName>{content.name}</S.SkillName>
                      {content.desc && <S.SkillDescription>{content.desc}</S.SkillDescription>}
                    </S.SkillCategoryListItem>
                  ))}
                </S.SkillCategoryList>
              </S.SkillListItem>
            ))}
          </S.SkillList>
        </S.Section>

        {/* ----- Education -----*/}
        <S.Section>
          <S.SectionTitle>學歷</S.SectionTitle>

          <Util.FlexBox justify="flex-start" gap="0 12px">
            <S.SchoolImageWrapper>
              <Image
                src="/images/asia_university_logo.jpg"
                width={60}
                height={60}
                alt="亞洲大學校徽"
              />
            </S.SchoolImageWrapper>
            <div>
              <S.SchoolName>亞洲大學, 資訊工程學系</S.SchoolName>
              <p>2010/9 ~ 2014/1 (肄)</p>
            </div>
          </Util.FlexBox>
        </S.Section>

        {/* ----- Autobiography -----*/}
        <S.Section>
          <S.SectionTitle>自傳</S.SectionTitle>

          <div>
            {resumeData.autobiography.map((paragraph) => (
              <S.AutobiographyParagraph key={paragraph}>{paragraph}</S.AutobiographyParagraph>
            ))}
          </div>
        </S.Section>
      </S.Wrapper>
    </Grid>
  );
};

export default Resume;
