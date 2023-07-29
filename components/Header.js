import { useAuth } from "../contexts/auth";

export default function Header() {
  const { logout, user } = useAuth();

  return (
    <header className="flex items-center justify-between pl-10 pr-5 bg-green-500 h-36">
      <h1 className="text-5xl font-bold text-white">Cookie Stand Admin</h1>
      <div className="flex items-center space-x-4">
        <h1 className="text-xl text-white">{user.username}</h1>
        <button
          className="p-2 text-white bg-green-700 rounded"
          onClick={() => logout()}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}
