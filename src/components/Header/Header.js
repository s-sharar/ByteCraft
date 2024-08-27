'use client'
import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import { MODE ,LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  const [mode, setMode] = React.useState(initialTheme);
  function handleClick () {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    Cookie.set(MODE, nextMode, { expires: 1000});
    const root = document.documentElement;
    root.setAttribute('data-color-theme', nextMode);
    const style = nextMode === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    Object.entries(style).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }

  return (
    <header
      className={clsx(styles.wrapper, className)}
      {...delegated}
    >
      <Logo />

      <div className={styles.actions}>
        <button onClick={handleClick} className={styles.action}>
          {mode === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
