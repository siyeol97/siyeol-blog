'use client';

import { signIn } from 'next-auth/react';
import styles from '../css/Credential.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface Form {
  email: string;
  password: string;
}

export default function Credential() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push('/');
    }

    if (response?.status === 401) {
      setError('email', { message: '이메일을 확인해 주세요' });
      setError('password', { message: '비밀번호를 확인해 주세요' });
    }
    return;
  };

  return (
    <section className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.input_box}>
          <label htmlFor='email'>Email</label>
          <input
            {...register('email', {
              required: '이메일을 입력해 주세요',
            })}
            id='email'
            type='email'
            autoFocus
            placeholder='Email *'
            autoComplete='user-name'
          />
          <p className={styles.error_message}>{errors.email?.message}</p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='password'>Password</label>
          <input
            {...register('password', {
              required: '비밀번호를 입력해 주세요',
            })}
            id='password'
            type='password'
            placeholder='Password *'
            autoComplete='current-password'
          />
          <p className={styles.error_message}>{errors.password?.message}</p>
        </div>
        <button type='submit'>로그인</button>
      </form>
    </section>
  );
}
