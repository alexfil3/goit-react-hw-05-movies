import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <ul className={css.nav}>
          <li>
            <NavLink to="/" className={css.itemLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.itemLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
