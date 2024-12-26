import LoginPage from "./Pages/LoginPage.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import MainPage from "./Pages/MainPage.jsx";
function App() {
  // return <LoginPage></LoginPage>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage></LoginPage>} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
          <Route path="mainPage" element={<MainPage></MainPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
