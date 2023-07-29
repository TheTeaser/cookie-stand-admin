import { useAuth } from "../contexts/auth"
import Home from "@/components/Home";
import LoginForm from "@/components/LoginForm";

export default function CookieStandAdmin() {
  const { user } = useAuth();



  return (
    <>
      {user ? (
        <>
          
          <Home/>
        </>
      ) : (
        <>
          
          <LoginForm/>
        </>
      )}
    </>

  )

}