import React, { useState,useEffect } from "react";
import Login from "./Loginpage";
import Dashboard from "./Dashbord";
function Task() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}
export default Task;