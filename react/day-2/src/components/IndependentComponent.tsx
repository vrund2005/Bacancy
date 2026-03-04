import { useName } from "./useContext/nameContext";

const IndependentComponent = () => {
  const { name } = useName();

  return (
    <>
      <div>Independent Component</div>

      <p style={{ backgroundColor: name === "Alpha" ? "pink" : "red" }}>
        {" "}
        if name will be Alpha i will be of pink bg else i will be red
      </p>
    </>
  );
};

export default IndependentComponent;
