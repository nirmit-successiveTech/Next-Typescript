"use client";

export default function useLocalStorage(key: string) {
  const setitem = (value: string) => localStorage.setItem(key, value);

  const getitem = (): string | null => {
    return localStorage.getItem(key);
  };

  return { setitem, getitem };
}
