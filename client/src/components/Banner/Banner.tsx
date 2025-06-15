import { Promotion } from '@/mocks/promotions';
import { FC, HTMLAttributes } from 'react';
import css from './Banner.module.css';
import { Button } from '@/components/Button';

type Props = Promotion & HTMLAttributes<HTMLDivElement>;

export const Banner: FC<Props> = ({ img, status, description, buttonText, title, ...rest }) => {
  return (
    <div {...rest} className={css.bannerWrapper}>
      <div className={css.descriptionWrapper}>
        <span className={css.status}>{status}</span>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
        <Button title={buttonText} variant="bordered" />
      </div>
      <div className={css.imageWrapper}>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};
