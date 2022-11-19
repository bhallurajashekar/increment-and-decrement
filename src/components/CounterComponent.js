import { useState,useEffect } from "react";

const CounterComponent = () => {
  let [count, setCount] = useState(0);
  let [showExtraButton, setShowExtraButton] = useState(false);


  useEffect(() => {
    console.log('Component has mounted')
}, [])

useEffect(() => {
    console.log('Component has updated')
}, [count, showExtraButton])


useEffect(() => {
    return () => {
        console.log('Component has unmounted')
    }
}, [])





  let style = {
    countStyle: { fontSize: "10em", margin: 0 },
    buttonStyle: {
      fontSize: "1.2em",
      padding: "10px",
      borderRadius: "10px",
      margin: "5px",
    },
  };

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setShowExtraButton(true);
      setCount(count + 1);
    }
  };


  const setToZero = () => {
    setCount((count = 0));
    setShowExtraButton(false);
  };




  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if(count<12)
      setShowExtraButton(false);
      
    } else {
      alert("Counter shuold not go number below zero");
    }
  };



  return (
    <>
      <p style={style.countStyle}>{count}</p>
      <button style={style.buttonStyle} onClick={increment}>
        Increment
      </button>
      <button style={style.buttonStyle} onClick={decrement}>
        Decrement
      </button>
      {showExtraButton && (
        <button style={style.buttonStyle} onClick={setToZero}>
          GO BACK TO 0
        </button>
      )}
    </>
  );
};

export default CounterComponent;