import { useAuth } from "../contexts/auth";

export default function LoginForm() {
  const { login } = useAuth();

  function loginHandler(event) {
    event.preventDefault();
    login(event.target.username.value, event.target.password.value);
  }

  return (
    <div className="flex items-center justify-center mt-20">
      <form
        className="flex flex-col items-center justify-center w-full max-w-sm p-6 bg-green-300 border border-black rounded-lg"
        onSubmit={loginHandler}
      >
        <label className="mb-3 text-2xl font-bold text-center">User Name</label>
        <input
          className="w-full px-4 py-2 mb-3 border rounded-lg"
          type="text"
          name="username"
          required
        />
        <label className="mb-3 text-2xl font-bold text-center">Password</label>
        <input
          className="w-full px-4 py-2 mb-3 border rounded-lg"
          type="password"
          name="password"
          required
        />
        <button
          className="w-full px-4 py-2 mt-6 text-2xl font-bold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
