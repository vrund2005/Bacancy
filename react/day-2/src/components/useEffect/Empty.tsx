import { useEffect } from "react";

const Empty = () => {
  useEffect(() => {
    console.log("Hello World");
  }, []);
  return (
    <>
      <div>useEffect Example with empty dependency</div>
    </>
  );
};

export default Empty;
