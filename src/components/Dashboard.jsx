import React, { useState, useContext } from "react";

// const MyContext = React.createContext(null);

// const initialState = [
//   { id: 1, quantity: 1 },
//   { id: 2, quantity: 2 },
//   { id: 3, quantity: 3 },
//   { id: 4, quantity: 4 },
// ];

// const DeepNestedComponent = () => {
//   const [stateFromContext, setStateFromContext] = useContext(MyContext);
//   // MyContext should be imported

//   const buttonHandler = (id, diff) => {
//     setStateFromContext(
//       stateFromContext.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + diff } : item
//       )
//     );
//   };

//   return (
//     <div>
//       {stateFromContext.map(({ id, quantity }) => (
//         <div key={id}>
//           {quantity}
//           <button onClick={() => buttonHandler(id, 1)}> + </button>
//           <button onClick={() => buttonHandler(id, -1)}> - </button>
//         </div>
//       ))}
//     </div>
//   );
// };

const Dashboard = () => {
  // const [contextState, setContextState] = useState(initialState);
  return (
    <div>
      <h1>This is a Dashboard</h1>
      {/* <MyContext.Provider value={[contextState, setContextState]}>
      <DeepNestedComponent />
    </MyContext.Provider> */}
    </div>
  )
}

export default Dashboard