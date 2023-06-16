import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>Username</label>
      <input className={css.formInput} type="text" name="name" />
      <label className={css.formLabel}>Email</label>
      <input className={css.formInput} type="email" name="email" />
      <label className={css.formLabel}>Password</label>
      <input className={css.formInput} type="password" name="password" />
      <button className={css.registerBtn} type="submit">
        Register
      </button>
    </form>
  );
};
