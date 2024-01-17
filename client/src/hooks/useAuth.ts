const useAuth = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/verify`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("user is valid", data);
      return data;
    } else {
      console.log("user is not valid", response.status);
    }
  } catch (error) {
    console.log("error while checking user validity: ", error);
  }
};

export default useAuth;
