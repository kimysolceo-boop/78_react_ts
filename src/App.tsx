import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";

// Lessons imports
import Lesson05 from "./lessons/Lesson05/Lesson05";
import Lesson06 from "./lessons/Lesson06/Lesson06";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson10 from "./lessons/Lesson10/Lesson10";
import Lesson12 from "./lessons/Lesson12/Lesson12";
import Lesson09 from "./lessons/Lesson09/Lesson09";

// Homeworks imports
import Homework10 from "./homeworks/Homework10/Homework10";
import Homework06 from "./homeworks/Homework06/Homework06";
import Homework08 from "./homeworks/Homework08/Homework08";

// Pages imports
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Users from "./pages/Users/Users";
import AdminUser from "./pages/Users/components/AdminUser/AdminUser";
import Lesson15 from "./pages/Lesson15/Lesson15";
import Home from "./pages/Home/Home";
import GetProfile from "./pages/GetProfile/GetProfile";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/lesson-5" element={<Lesson05 />} />
          <Route path="/lesson-6" element={<Lesson06 />} />
          <Route path="/lesson-7" element={<Lesson07 />} />
          <Route path="/lesson-8" element={<Lesson08 />} />
          <Route path="/lesson-9" element={<Lesson09 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />

          <Route path="/homework-6" element={<Homework06 />} />
          <Route path="/homework-8" element={<Homework08 />} />
          <Route path="/homework-10" element={<Homework10 />} />

          <Route path="/lesson-15" element={<Lesson15 />} />

          <Route path="/users" element={<Users />} />
          <Route path="/users/admin" element={<AdminUser />} />

          <Route path="/get-profile" element={<GetProfile />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;