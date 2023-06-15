import ContactForm from 'components/contact-form/contact-form';
import ContactList from 'components/contact-list/contact-list';
import { Filter } from 'components/filter/filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'services/contactsApi';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && !error && <b>Loading...</b>}
      <ContactList />
    </div>
  );
}
