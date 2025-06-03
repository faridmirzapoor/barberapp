"use client";

import { useEffect, useState } from "react";

const IsLoggedState = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  if (!token) return false;
  const isLogged = !!token

  return isLogged;
};

export default IsLoggedState