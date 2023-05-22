import { useEffect, useState } from "react";

export default function useDebounce(initialValue, duration = 500) {
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialValue);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [initialValue]);
  return debounceValue;
}
