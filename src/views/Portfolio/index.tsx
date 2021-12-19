import Grid from '@components/layout/Grid';
import { PortfolioCard } from '@components/PortfolioCard';

import type { CardProps } from '@components/PortfolioCard/type';

import Util from '@styles/util';
import S from './styled';

const GITHUB_REPO_DOMAIN = 'https://github.com/NorthaHuang';
const GITHUB_PAGE_DOMAIN = 'https://northahuang.github.io';

const githubProjectData: CardProps[] = [
  {
    name: '萬年曆 + 日期選擇器組件',
    imgSrc: '/images/projects/calendar-component.jpg',
    url: {
      demo: 'https://happy-hoover-81c481.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/calendar-component`,
    },
  },
  {
    name: '卡牌搜尋器',
    imgSrc: '/images/projects/the-inn-of-planeswalker.jpg',
    url: {
      demo: 'https://vibrant-wing-6dc37d.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/the-inn-of-planeswalker`,
    },
  },
  {
    name: 'OMDB 電影資訊查詢',
    imgSrc: '/images/projects/OMDB-Demo.jpg',
    url: {
      demo: 'https://priceless-wescoff-0a86d2.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/OMDB-Demo`,
    },
  },
  {
    name: '計時器',
    imgSrc: '/images/projects/clock-timer.jpg',
    url: {
      demo: `${GITHUB_PAGE_DOMAIN}/clock-timer`,
      github: `${GITHUB_REPO_DOMAIN}/clock-timer`,
    },
  },
  {
    name: '圈圈叉叉小遊戲',
    imgSrc: '/images/projects/tic-tac-toe.jpg',
    url: {
      demo: 'https://festive-bhaskara-be8f3f.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/tic-tac-toe`,
    },
  },
  {
    name: 'Redux Counter Demo',
    imgSrc: '/images/projects/redux-counter-demo.jpg',
    url: {
      demo: 'https://stoic-dijkstra-dd7439.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/redux-counter-demo`,
    },
  },
  {
    name: 'Redux To-Do List Demo',
    imgSrc: '/images/projects/redux-todolist-demo.jpg',
    url: {
      demo: 'https://amazing-swanson-c138c8.netlify.app/',
      github: `${GITHUB_REPO_DOMAIN}/redux-todolist-demo`,
    },
  },
];

const greatOneData: CardProps[] = [
  {
    name: 'Yahoo 時尚美妝',
    imgSrc: '/images/projects/yahoo_style.jpg',
    url: {
      website: 'https://style.yahoo.com.tw/',
    },
  },
  {
    name: 'Discovery 頻道官方網站',
    imgSrc: '/images/projects/discovery.jpg',
    url: {
      website: 'https://www.discoverychannel.com.tw/',
    },
  },
  {
    name: '康健人壽 - 保障規劃網',
    imgSrc: '/images/projects/cigna.jpg',
    url: {
      website: 'https://www.cigna.com.tw/pc/homepage.php',
    },
  },
  {
    name: '家教銀行 TutorBank 官方網站',
    imgSrc: '/images/projects/tutor_bank.jpg',
    url: {
      website: 'https://www.tutorbank.com.tw/',
    },
  },
  {
    name: '十間茶屋官方網站',
    imgSrc: '/images/projects/shi_jian_tea.jpg',
    url: {
      website: 'https://shijiantea.com.tw/',
    },
  },
];

const Portfolio: React.FC = () => {
  return (
    <Grid>
      <Util.PageTitle>作品集</Util.PageTitle>

      <S.Section>
        <h2>GitHub Repo Demo</h2>
        <S.List>
          {githubProjectData.map((data) => (
            <PortfolioCard key={data.name} {...data} />
          ))}
        </S.List>
      </S.Section>

      {greatOneData.length > 0 && (
        <S.Section>
          <h2>
            在線作品 <span>(才式創意科技有限公司)</span>
          </h2>
          <S.List>
            {greatOneData.map((data) => (
              <PortfolioCard key={data.name} {...data} />
            ))}
          </S.List>
        </S.Section>
      )}
    </Grid>
  );
};

export default Portfolio;
