import "./App.css";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import { useSelector } from "react-redux/es/exports";
import AdminPanel from "./components/AdminPanel";
import AdminLogIn from "./components/AdminLogIn";
import AuthUserPage from "./components/AuthUserPage";

function App() {
  const login = useSelector((state) => state.register.login);
  const shwAdm = useSelector((state) => state.register.shw);
  const adm = useSelector((state) => state.register.adm);
  const auth = useSelector((state) => state.register.auth);

  return (
    <>
      {(auth && <AuthUserPage />) || (
        <div>
          {(adm && <AdminPanel />) || (
            <div>
              {(shwAdm && <AdminLogIn />) || (
                <div>{(login && <LogIn />) || <Register />}</div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
