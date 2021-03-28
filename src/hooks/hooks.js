import { useState, useEffect } from 'react';

import { useRouter } from 'next/router'


export const useForm = (initialValues) => {

  const [form, setForm] = useState(initialValues)

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  }

  const resetForm = () => {
    setForm(initialValues);
  }

  return { form, onChange, resetForm }
};

export const usePrivatePage = (token) => {
  const router = useRouter();

  useEffect(() => {

    if (! token){
      window.alert('A sessão expirou. Faça login novamente.')
      router.replace('/');
    };
  }, [router]);
};
