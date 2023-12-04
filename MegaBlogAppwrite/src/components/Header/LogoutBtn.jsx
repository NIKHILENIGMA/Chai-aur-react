import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logOut } from "../../store/authSlice";

export default function LogoutBtn() {
  const disPatch = useDispatch();
  const logoutHandler = () => {
    authService.logOut.then(() => {
      disPatch(logOut()).catch((err) => {
        console.log(`Error for dispatch :: LogoutBtn :: Error : ${err}`);
      });
    });
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}
