export default function Register() {
  return (
    <div>
      <form
        method='POST'
        action='/api/auth/signup'
      >
        <input
          name='name'
          type='text'
          placeholder='이름을 입력해주세요'
          required
        />
        <input
          name='email'
          type='email'
          placeholder='example@google.com'
          required
        />
        <input
          name='password'
          type='password'
          placeholder='비밀번호를 입력해 주세요'
          required
        />
        <button>회원가입 하기</button>
      </form>
    </div>
  );
}
