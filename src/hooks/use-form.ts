import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState();
  const onChange = ({ target }: any) => setValue(target.value);
  return {
    value,
    onChange,
  };
};

export default useForm