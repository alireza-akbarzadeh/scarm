import React from "react";

const useForm = (initialValues) => {
  const [values, setValues] = React.useState(initialValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;

// const initialState = { email: '', password: '' };
// const [values, setValues] = useForm(initialState);
