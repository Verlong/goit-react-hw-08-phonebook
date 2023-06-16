import ContactList from 'components/contact-list/contact-list';
import css from './pages.module.css';
export default function Home() {
  return (
    <div>
      <h1 className={css.title}>Your Phonebook</h1>
      {ContactList ? <ContactList /> : <p>Please Log in</p>}
    </div>
  );
}
