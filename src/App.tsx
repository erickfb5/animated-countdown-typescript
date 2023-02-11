import React, { useState, useEffect } from "react";
import "./App.css";

interface Props {}

const App: React.FC<Props> = () => {
  const [currentNum, setCurrentNum] = useState<number>(5);
  const [showFinal, setShowFinal] = useState<boolean>(false);

  useEffect(() => {
    if (currentNum === 0) {
      setShowFinal(true);
      return;
    }
    const intervalId = setInterval(() => {
      setCurrentNum(currentNum - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentNum]);

  const resetCounter = () => {
    setCurrentNum(5);
    setShowFinal(false);
  };

  return (
    <div>
      {!showFinal && (
        <div className="counter">
          <div className="nums">{currentNum}</div>
          <h4>Get Ready</h4>
        </div>
      )}
      {showFinal && (
        <div className="final">
          <h1>GO</h1>
          <button id="replay" onClick={resetCounter}>
            Replay
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
