import Image from 'next/image';

import Grid from '@components/layout/Grid';
import Util from '@styles/util';

import S from './styled';

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
      duration: '2020/10 ~ 仍在職 (1年2個月)',
      image: {
        src: '/images/company_logo/sparkamplify.jpg',
        alt: 'SparkAmplify 公司 Logo',
      },
      responsibility: ['開發新系統和維護現有產品'],
    },
    // 歐銀數位科技
    {
      company: {
        name: '歐銀數位科技',
      },
      title: '前端工程師',
      duration: '2019/7 ~ 2020/1 (半年)',
      image: {
        src: '/images/company_logo/o2gether.jpg',
        alt: '歐銀數位科技公司 Logo',
      },
      responsibility: [
        '會員/員工的身分/權限設定及管理',
        '網站內容管理 (編輯前台顯示之內容和區塊)',
        '會員層級 (類似 VIP 功能)',
        '優惠活動和回饋金額設定',
        '公告信和站內信管理',
        '會員及員工金流紀錄報表設定和匯出',
        '金流稽核功能',
      ],
    },
    // 才式創意科技
    {
      company: {
        name: '才式創意科技',
        url: 'http://www.greatone.com.tw/',
      },
      title: '網頁設計師 (前端)',
      duration: '2016/7 ~ 2019/5 (2年10個月)',
      image: {
        src: '/images/company_logo/greatone.jpg',
        alt: '才式創意科技公司 Logo',
      },
      responsibility: [
        '運用 HTML5、SCSS 及 jQuery 將設計稿製成 RWD、AWD 網頁。',
        '使用 PhotoShop Resize 或是微調圖片，確保各裝置顯示正確。',
        '網頁維運。',
        '前端公版製作維護。',
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
                  <a href={resumeData.info.email}>{resumeData.info.email}</a>
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
            <p>
              目前在 SparkAmplify 的工作主要是在開發和維護現有的 SaaS
              網站，雖然說主要工作都還是負責前端，但有時工作分配還是會需要從建立資料庫
              table、後端、API 到前端一起處理。
              <br />
              印象比較深刻的任務是優化一個很老舊的公開網站；網站不知為何放在 GCP 的 Cloud Function
              上，研究後發現 Cold Start
              和其他種種關係會嚴重影響到網頁開啟速度，也因為沒有夠多的金錢和時間成本讓我們搬遷到 VM
              + 整體重構，取捨過後決定先盡力研究並優化速度；結果就是從最初的 9 秒進步到 2
              秒左右讓使用者接收到伺服器回應 (Cloud Function
              還是有其限制)。若您對此項目有興趣也歡迎詢問細節!
            </p>

            <p>
              另外在公司因為後台製作了類似 CMS
              讓使用者可以建立屬於自己的頁面，所以最近也開始在嘗試自己建立 PWA 部落格與其管理後台
              (類似無名小站或 Blogger 概念)。
            </p>

            <p>
              第二份的工作主責後台開發。
              <br />
              因為是後台的關係，所以切版的作業較少；主要都是和後端溝通 API
              的格式以及理解各個功能的業務邏輯，最後使用 AJAX 實際串接 API。
              <br />
              這次接觸到中型的包網平台才發現，原來串接 API
              並沒有想像中的單純，而是要做許多準備跟理解業務邏輯才能夠做好串接，而且串接後還要處理各種例外事件、Response接收順序處理、Loading
              等等，也因此讓我進步了很多!
            </p>

            <p>
              第一份工作主責接手設計稿進行高度還原切版。
              <br />
              由於公司為接案公司的緣故，案子不少時間又短，同時間還需要維護現有專案，懂得如何分辨輕重緩急來排程，快速解決客戶問題及突發狀況的處理能力慢慢被培養起來。
              <br />
              身為菜鳥不免會有應付不來的狀況發生，所以私下開始做些提升效率的工作：背記 Emmet、撰寫
              boilerplate、撰寫 Plugin、將常用的模板先寫好(Hamburger 之類)、撰寫 Snippets...
              等等；理解到不能傻傻的努力，而是要聰明效率的工作。
              <br />
              在近
              3年經歷中，從完全沒有切版經驗到後來制定前端部門的作業標準、引入新的技術工具、協助同事尋找並處理
              Bug，那種貢獻的成就感讓我越來越享受在團隊和工作當中，老闆主任也都很滿意。
              <br />
              雖然當初公司沒有使用前端框架，但因著在社群文章中發現了新大陸，於是開始摸索前端框架、Webpack、API
              串接... 等等 Modern Web 技術；在這途中接觸的框架是從 Vue
              開始，因為比較方便小部分的嵌入到傳統的網頁架構中，後來使用 Vue
              幫前同事製作了一個選戰統計網頁； 後來因為想要試著架設部落格，於是從 Gatsby
              入門開始接觸到了 React，發現 React 寫法比較像是在開發程式 (相較於 Vue 是寫在 Tag
              中來說)，於是決定投入 React 的懷抱中。
            </p>

            <p>
              若有幸進入貴公司，計畫是能在三個月內熟悉專案架構、開發流程還有理解各個規範步上軌道。至於未來則是等新部落格整體完成後也打算開始玩玩看
              Flutter 和 Dart 語言。
            </p>
          </div>
        </S.Section>
      </S.Wrapper>
    </Grid>
  );
};

export default Resume;
