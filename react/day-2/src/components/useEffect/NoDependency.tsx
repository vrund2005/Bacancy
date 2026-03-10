import { useEffect, useState } from "react";

const NoDependency = () => {
  const [value, setValue] = useState<number>(0);
  const [greeting, setGreetings] = useState<string>("Hello Buddy!");
  useEffect(() => {
    console.log("Hello world - counter changed");
  });
  return (
    <>
      <div>useEffect with no dependency</div>
      <button onClick={() => setValue((prev) => prev + 1)}>
        change value - {value}
      </button>
      <br />
      <button
        onClick={() =>
          setGreetings((prev) =>
            prev === "Bye Buddy" ? "Hello Buddy!" : "Bye Buddy"
          )
        }
      >
        change Greetings - {greeting}
      </button>
    </>
  );
};

export default NoDependency;
