import React, { useState } from "react";

const App = () => {
  const arry = [
    "Step 1 : Learn React",
    "Step 2 : Earn Your Income",
    "Step 3 : Invest Your Income",
  ];

  const [step, setStep] = useState(1);

  const NextHandler = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevousHandler = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div id="main">

      <div id="card">
        <h1>React Step Assignment</h1>

        <div id="circles">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <div id="heading">
          <h2>{arry[step - 1]}</h2>
        </div>

        <div id="btns">
          <button
            onClick={prevousHandler}
            disabled={step === 1}
          >
            Previous
          </button>

          <button
            onClick={NextHandler}
            disabled={step === 3}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default App;