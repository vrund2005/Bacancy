import { useState } from "react";
interface man {
  age: number;
  name: string;
}

const Assigment = ({ age, name }: man) => {
  Number(age);
  const [userage, setAge] = useState<number>(age);
  const [username, setName] = useState<string>(name);
  const updateAge = () => setAge(userage + 1);

  return (
    <>
      <p>Age : {userage} </p>
      <button
        onClick={() => {
          updateAge();
        }}
      >
        Update Age
      </button>

      <p>Name : {username} </p>
      <label htmlFor="newname">Name please : </label>
      <input
        type="text"
        value={username}
        placeholder="Enter Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

export default Assigment;

// import { useState } from "react";

// const Counter = () => {
//   const name = "ehhe";
//   const [value, setValue] = useState<number>(0);
//   const handleValueUpdate = (val: number) => setValue(val + 1);

//   return (
//     <>
//       <p>Current Value - {value} </p>

//       <button
//         onClick={() => {
//           handleValueUpdate(value);
//         }}
//       >
//         Update Value
//       </button>
//     </>
//   );
// };

// export default Counter;
