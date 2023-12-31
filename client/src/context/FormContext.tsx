import React, { createContext, useContext, useState } from "react";
export const FormDataProvider = createContext({});

export function FormContext({ children }: any) {
  const [form, setForm] = useState<any>({});
  return (
    <FormDataProvider.Provider value={{ form, setForm }}>
      {children}
    </FormDataProvider.Provider>
  );
}

const useFormData = () => {
  const context = useContext(FormDataProvider);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};

export default useFormData;
