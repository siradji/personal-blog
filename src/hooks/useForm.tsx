import React, { ChangeEvent, useState } from 'react';

type formStateType = 'dirty' | 'loading' | 'virgin' | 'submitted';

type useFormType = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: ChangeEvent<HTMLInputElement>) => any;
  formState: formStateType;
  formValues: any;
};

export const useForm = (): useFormType => {
  const [formFields, setFormFields] = useState({});
  const [formState, setFormState] = useState<formStateType>('virgin');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
    setFormState('dirty');
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setFormState('submitted');
    return formFields;
  }

  return {
    handleChange,
    handleSubmit,
    formState,
    formValues: formFields,
  };
};
