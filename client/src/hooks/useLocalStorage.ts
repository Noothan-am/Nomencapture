function useLocalStorage() {
  const setItem = (formData: any) => {
    localStorage.setItem("form-details", JSON.stringify(formData));
  };

  const getItem = () => {
    const data: any = localStorage.getItem("form-details");
    if (!data) {
      localStorage.setItem("form-details", JSON.stringify(""));
      return {} as any;
    }
    return JSON.parse(data);
  };

  return { setItem, getItem };
}

export function useLocalStorageForUserDetails() {
  const setItem = (userDetails: any) => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  const getItem = () => {
    const data: any = localStorage.getItem("userDetails");
    if (!data) {
      localStorage.setItem("userDetails", JSON.stringify(""));
      return {} as any;
    }
    return JSON.parse(data);
  };

  return { setItem, getItem };
}

export default useLocalStorage;
