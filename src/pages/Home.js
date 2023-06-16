import ContactList from 'components/contact-list/contact-list';
import css from './pages.module.css';
import { useAuth } from 'hooks';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h1 className={css.title}>Your Phonebook</h1>
      {isLoggedIn ? <ContactList /> : <p>Please Log in</p>}
    </div>
  );
}
