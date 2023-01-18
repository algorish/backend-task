import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

type Props = {};

const RoutingConfig = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingConfig;
