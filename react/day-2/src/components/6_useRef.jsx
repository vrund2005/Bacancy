import React, { useRef } from "react";

function Ass6() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default Ass6;

// function Ass6() {
//   const renderCount = useRef(0);

//   renderCount.current += 1;

//   return <p>Component rendered {renderCount.current} times</p>;
// }

// export default Ass6;
