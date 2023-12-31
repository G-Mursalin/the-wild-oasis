import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
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
import BookingDetail from "./features/bookings/BookingDetail/BookingDetail";
import CheckInBooking from "./features/check-in-out/CheckInBooking/CheckInBooking";
import ProtectedRoute from "./ui/ProtectedRoute/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<BookingDetail />} />
              <Route path="checkin/:bookingId" element={<CheckInBooking />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Toast */}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
