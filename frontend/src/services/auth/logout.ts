"use client";

const useLogoutUser = () => {
  const logout = () => {
    localStorage.clear(); 
    window.location.reload(); 
  };

  return logout;
};

export default useLogoutUser;