'use client';

import css from './Dashboard.module.css';
import { BannerSlider } from '@/pageContainers/Dashboard/BannerSlider';

export const Dashboard = () => {
  return (
    <div className={css.dashboardWrapper}>
      <div className={css.container}>
        <BannerSlider />
      </div>
    </div>
  );
};
