import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    try {
      let item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(initialValue);
      return initialValue;
    }
  });

  const setItem = (value) => {
    //TODO: add support for functions
    //save to localstorage
    try {
      localStorage.setItem(key, JSON.stringify(value));

      setState(value);
    } catch (err) {}
    //save to state
  };

  return [state, setItem];
};

export default useLocalStorage;
