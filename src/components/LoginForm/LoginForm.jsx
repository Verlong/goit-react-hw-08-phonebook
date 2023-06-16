import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginBox}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={css.userBox}>
          <label className={css.formLabel}>Email</label>
          <input className={css.formInput} type="email" name="email" />
        </div>

        <div className={css.userBox}>
          <label className={css.formLabel}>Password</label>
          <input className={css.formInput} type="password" name="password" />
        </div>

        <button className={css.logInBtn} type="submit">
          Log In
          <span></span>
        </button>
      </form>
    </div>
  );
};
