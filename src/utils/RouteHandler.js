import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import isTokenValid from "./TokenHandlers/ExpiryCheck"


const RouteChangeHandler = () => {
  const location = useLocation();


  const checkTokenOperations = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFzYzIwMjVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJwYXJhc3NzIiwicGhvbmUiOjM4MTA5MCwicm9sZSI6IlVzZXIiLCJhZGRyZXNzIjoiY2hsZSIsImlhdCI6MTcwMzYwNTMyNiwiZXhwIjoxNzAzNjA4OTI2f.X1rQXFDwN5-fwq2ouwXPWPQKX7I5rVRvdqv3gjcxAL0'; 

    if (isTokenValid(token)) {
      console.log(`Token is valid `);
    } else {
      console.log(`Token expired `);
    }
  };



  useEffect(() => {
    checkTokenOperations();
  }, [location.pathname]);




  return null;
};

export default RouteChangeHandler;
