const isTokenValid = (token) => {
    if (!token) {
      return false;
    }
  
    try {
      const tokenParts = token.split('.');
      const payload = JSON.parse(atob(tokenParts[1]));
      const currentTimestamp = Math.floor(Date.now() / 1000);
  
  
      return payload.exp > currentTimestamp;
    } catch (error) {
      return false;
    }
  };
  
  export default isTokenValid;
  