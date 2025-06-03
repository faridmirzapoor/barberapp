"use client";

import { useEffect, useState } from "react";

const UsernameDisplay = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  if (!username) return null;

  return <p className="absolute left-20 font-medium">{username}</p>;
};

export default UsernameDisplay