import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account/Account";
import Bookings from "./pages/Bookings/Bookings";
import Cabins from "./pages/Cabins/Cabins";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Settings from "./pages/Settings/Settings";
import Users from "./pages/Users/Users";
import AppLayout from "./ui/AppLayout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
