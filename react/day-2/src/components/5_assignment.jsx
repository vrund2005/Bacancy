// class WindowWidth extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         width: typeof window !== "undefined" ? window.innerWidth : 0
//       };
//       this.handleResize = this.handleResize.bind(this);
//     }

//     handleResize() {
//       this.setState({ width: window.innerWidth });
//     }

//     componentDidMount() {
//       window.addEventListener("resize", this.handleResize);
//     }

//     componentWillUnmount() {
//       window.removeEventListener("resize", this.handleResize);
//     }

//     render() {
//       return (
//         <div>
//           <p>Window width: <strong>{this.state.width}px</strong></p>
//           <small>Resize the window to see it update. Unmount to remove the listener.</small>
//         </div>
//       );
//     }
//   }

import React, { useState, useEffect } from "react";

function Ass5() {
  let counter = 0;
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      console.log("inside function");
    }

    window.addEventListener("resize", handleResize);
    console.log("outside function");
    return () => {
      console.log("Cleaner");
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <div>
      <p>
        Window width: <strong>{width}px</strong>
      </p>
      <small>
        Resize the window to see it update. Unmount to remove the listener.
      </small>
    </div>
  );
}

export default Ass5;
