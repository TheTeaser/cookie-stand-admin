import { useState } from "react";
import LoginForm from "./LoginForm";
import ReportTable from "./ReportTable";

export default function CookieStandAdmin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
  
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <ReportTable />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}
