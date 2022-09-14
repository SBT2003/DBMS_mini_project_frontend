import React from "react";
import { useEffect } from "react";

export default function Logout() {
  const logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crdentials: "include"
      });

      if(res.status===400 || !res)
      {
        window.alert("Please logout later!");
      }
    //   else{
    //     window.alert("Logged out successfully!");
    //     window.location.reload();
    //     // history.pushState('/logout')
    //   }
    } catch (error) {}
  };

  useEffect(() => {
    logout();
  }, []);
  return <div>logout</div>;
}
