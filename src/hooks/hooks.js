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

export const usePrivatePage = () => {

  const router = useRouter();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      router.push('/');
    }
  }, [router]);
}

export const useFeedPage = () => {

  const router = useRouter();

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      router.push('/postPage');
    }
  }, [router]);
}

