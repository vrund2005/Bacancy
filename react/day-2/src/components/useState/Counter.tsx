import { useState } from "react";

const Counter = () => {
  const name = "ehhe";
  const [value, setValue] = useState<number>(0);
  const handleValueUpdate = (val: number) => setValue(val + 1);

  return (
    <>
      <p>Current Value - {value} </p>

      <button
        onClick={() => {
          handleValueUpdate(value);
        }}
      >
        Update Value
      </button>
    </>
  );
};

export default Counter;
