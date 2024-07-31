import React, { useState } from "react";

enum CounterType {
  Increment = "Increment",
  Decrement = "Decrement",
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): number => {
    const target = e.target as HTMLButtonElement;
    if (target.outerText === CounterType.Increment) {
      setCounter(counter + 1);
    } else if (target.outerText === CounterType.Decrement) {
      setCounter(counter - 1);
    }
    return counter;
  };

  // const Counter = () => {
  //   const [counter, setCounter] = useState(0);

  //   const handleClick = (e: any) => {
  //     e.target.outerText === "Decrement"
  //       ? setCounter(counter - 1)
  //       : setCounter(counter + 1);
  //   };
  return (
    <div>
      <div className="block ml-[50px] mt-8 ">
        <span className="text-xl">{counter}</span>
      </div>

      <div>
        <button className="w-32 h-12 border-4" onClick={handleClick}>
          Decrement
        </button>
        <button className="w-32 h-12 border-4" onClick={handleClick}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
