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
    slug: 'calendar-component',
    url: {
      demo: `${GITHUB_PAGE_DOMAIN}/calendar-component`,
      website: '//www.google.com',
      github: `${GITHUB_REPO_DOMAIN}/calendar-component`,
    },
  },
  {
    name: '卡牌搜尋器 (魔法風雲會)',
    slug: 'the-inn-of-planeswalker',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/the-inn-of-planeswalker`,
    },
  },
  {
    name: 'OMDB 電影資訊查詢',
    slug: 'OMDB-Demo',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/OMDB-Demo`,
    },
  },
  {
    name: '計時器',
    slug: 'clock-timer',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/clock-timer`,
    },
  },
  {
    name: '圈圈叉叉小遊戲',
    slug: 'tic-tac-toe',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/tic-tac-toe`,
    },
  },
  {
    name: 'Redux Counter Demo',
    slug: 'redux-counter-demo',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/redux-counter-demo`,
    },
  },
  {
    name: 'Redux To-Do List Demo',
    slug: 'redux-todolist-demo',
    url: {
      github: `${GITHUB_REPO_DOMAIN}/redux-todolist-demo`,
    },
  },
];

const greatOneData: CardProps[] = [
  { name: '威德 in 果凍活動' },
  {
    name: 'Yahoo 時尚美妝',
    url: {
      website: '',
    },
  },
  { name: '中信金控: CSR2016 介紹網站' },
  { name: 'LinkBike_形象官網' },
  { name: 'Nivea_藍罐活動' },
  { name: 'Philips_萬用鍋新年活動' },
  { name: 'Yahoo_HBL賽程' },
  { name: 'Adidas_Gazelle系列' },
  { name: 'Nissan_智慧影音系統介紹' },
  { name: '純喫茶_體驗紀錄' },
  { name: '2020 總統選戰大數據' },
  {
    name: 'Discovery 頻道官方網站',
    url: {
      website: 'https://www.discoverychannel.com.tw/',
    },
  },
  {
    name: '康健人壽 - 保障規劃網',
    url: {
      website: 'https://www.cigna.com.tw/pc/homepage.php',
    },
  },
  {
    name: '家教銀行 TutorBank 官方網站',
    url: {
      website: 'https://www.tutorbank.com.tw/',
    },
  },
  {
    name: '十間茶屋官方網站',
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
            切版作品 <span>(才式創意科技有限公司)</span>
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
