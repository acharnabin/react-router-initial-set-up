import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
  const [hasToken, setHasToken] = useState(false);
//   const navigate=useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token?.length) {
      setHasToken(true);
    }
  }, []);

//   navigate('/auth/login')

  return <>{hasToken ? children : <Navigate to="/auth/login" />}</>;
};

export default ProtectedRoute;
