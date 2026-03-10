import UseEffectExample from "./components/useEffect/Example";
import Counter from "./components/useState/Counter";
import UseContexExample from "./components/useContext/Example";
import IndependentComponent from "./components/IndependentComponent";
import Assignment5 from "./components/5_assignment";
import Assignment6 from "./components/6_useRef";
import Assignment7 from "./components/7_useReducer";
import Assignment1 from "./components/useState/1_assignment";
import Assignment2 from "./components/useEffect/2_assignment";
import Assignment3 from "./components/useEffect/3_assignment";
import Assignment4 from "./components/useContext/ThemeContext";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Assignment1 age={21} name={"Vrund"} />
      {/* <Assignment2 /> */}
      <Assignment3 />
      <Assignment4 />
      <Assignment5 />
      <Assignment6 />
      <Assignment7 />

      {/* <Counter />
      {<UseEffectExample dependencyType="WITH_DEPENDENCY" />}
      <UseContexExample />
      <IndependentComponent /> */}
    </div>
  );
}
