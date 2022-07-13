import { Routes, Route } from "react-router-dom";
import LoginScreen from "../components/Login/LoginScreen";
import DashBoardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/bb_and_bcs/login" element={<LoginScreen />} />
        <Route path="/bb_and_bcs/*" element={<DashBoardRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
