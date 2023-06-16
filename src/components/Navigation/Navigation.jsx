import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navList}>
      <NavLink className={css.navLink} to="/">
        <span>PhoneBook</span>
      </NavLink>

      {isLoggedIn && (
        <NavLink className={css.navLink} to="/contacts">
          <span>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
