import { useName } from "./nameContext"; // Import your custom hook

const Example = () => {
  // TypeScript now knows 'name' exists because the hook handles the undefined check
  const { name, setName } = useName();

  return (
    <>
      <div>Context Example</div>
      <p>{`This is the name I got from context - ${name}`}</p>

      <button onClick={() => setName("Beta")}>Chane Name</button>
    </>
  );
};

export default Example;
