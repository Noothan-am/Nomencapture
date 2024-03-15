const useAuth = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/verify`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return { data, isValid: data.isValid };
    } else {
      const data = {};
      return { data, isValid: false };
    }
  } catch (error) {
    const data = {};
    console.log("error while checking user validity: ", error);
    return { data, isValid: false };
  }
};

export default useAuth;
