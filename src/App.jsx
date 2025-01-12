import {useEffect, useMemo, useState} from "react";

function App() {
  const [weight, setWeight] = useState(50);
  const [height, setHeight] = useState(160);
  const [result, setResult] = useState("");

  //using useState hook
  const weightChange = (event) => {
    setWeight(event.target.value);
  };
  const heightChange = (event) => {
    setHeight(event.target.value);
  };

  // using useMemo hook
  const output = useMemo(() => {
    const meterHeight = height / 100;
    return (weight / (meterHeight * meterHeight)).toFixed(1);
  }, [height, weight]);

  //to display the result >>  use useEffect hook

  useEffect(() => {
    const BMI = output;

    if (BMI < 18.5) {
      setResult("Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setResult("Normal Weight");
    } else if (BMI >= 25 && BMI <= 29.9) {
      setResult("Overweight");
    } else {
      setResult("obese");
    }
  }, [output]);
  return (
    <main className="main">
      <h1>Project 4 : BMI CALCULATOR</h1>

      <div className="inputDiv">
        <p>Weight : {weight} kg</p>
        <input
          className="inputSlider"
          type="range"
          min={40}
          max={200}
          onChange={weightChange}
        />

        <p>Height : {height} cm</p>
        <input
          className="inputSlider"
          type="range"
          min={120}
          max={260}
          onChange={heightChange}
        />
      </div>

      <div className="outputDiv">
        <p>Your BMI is </p>
        <p className="output">{output}</p>

        <p>Result : {result}</p>
      </div>
    </main>
  );
}

export default App;
