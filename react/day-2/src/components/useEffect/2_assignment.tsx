// Create a component that starts a `setInterval` when it mounts,
// updates a counter every second, and clears the interval in a
// `useEffect` cleanup. Unmount the component (e.g. toggle with a button)
// and confirm the interval stops (no console errors or extra ticks).

import { useEffect } from "react";
import { useState } from "react";

const Ass2 = () => {
  const [val, setVal] = useState<number>(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log(val);
    }, 1000);

    if (val >= 4) {
      clearInterval(id);
      console.log("End");
    }
    return () => clearInterval(id); // cleanup
  }, [val]);
  return (
    <>
      <br />
      <br />
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Click on Me
      </button>
      <h1>{val}</h1>
    </>
  );
};

export default Ass2;
