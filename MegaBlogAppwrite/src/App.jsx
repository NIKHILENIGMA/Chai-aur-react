import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { logIn, logOut } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className=" w-full block">
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
      test
    </div>
  ) : null;
}

export default App;
