import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function withAuth(WrappedComponent) {
  return (props) => {
    const isAuthenticated = true;
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated, navigate]);
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
}

export default withAuth;
