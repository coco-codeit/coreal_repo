const INPUT_CLASS =
  "py-[6px] sm:py-[10px] px-[10px] sm:px-4 bg-gray-2 placeholder-gray-8 rounded-lg sm:rounded-xl mb-[15px] sm:mb-6 sm:text text-sm sm:text-base";

export default function LoginForm() {
  return (
    <form className="flex flex-col" aria-label="로그인 양식">
      <label htmlFor="id" className="text-xs sm:text-base py-2">
        아이디
      </label>
      <input
        type="email"
        id="id"
        name="id"
        placeholder="이메일을 입력해 주세요."
        className={INPUT_CLASS}
        required
        autoFocus
        aria-required="true"
      />
      <label htmlFor="password" className="text-xs sm:text-base py-2">
        비밀번호
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요."
        className={INPUT_CLASS}
        required
        aria-required="true"
      />
      <button
        type="submit"
        className="bg-gray-8 text-white py-[6px] md:py-[10px] rounded-lg sm:rounded-xl mt-[15px] sm:mt-4 mb-4 sm:mb-6 text-xs sm:text-base"
      >
        로그인
      </button>
    </form>
  );
}
