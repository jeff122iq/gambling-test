'use client';

import css from './Header.module.css';
import { Logo } from '@/components/Logo';
import { useState } from 'react';
import { Button } from '@/components/Button';

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <header className={css.headerWrapper}>
      <div className={css.container}>
        <Logo />
        {!isLoggedIn && (
          <div className={css.buttonWrapper}>
            <Button title="Login" variant="secondary" />
            <Button title="Register" />
          </div>
        )}
      </div>
    </header>
  );
};
