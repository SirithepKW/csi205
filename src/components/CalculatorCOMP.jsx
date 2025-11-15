import React, { useState } from "react";

const CalculatorCOMP = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);

  const checkEmpty = (value) => (value === "" ? 0 : Number(value));

  const handlePlus = () => setResult(Number(a) + Number(b));
  const handleMinus = () => setResult(Number(a) - Number(b));
  const handleMultiply = () => setResult(Number(a) * Number(b));
  const handleDivide = () => setResult(Number(a) / Number(b));

  return (
    <div className="text-center p-4">
      <div className="mb-3">
        <label className="fw-bold me-2">A:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(checkEmpty(e.target.value))}
          className="form-control d-inline-block w-auto me-3"
        />
        <label className="fw-bold me-2">B:</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(checkEmpty(e.target.value))}
          className="form-control d-inline-block w-auto"
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success mx-2" onClick={handlePlus}>+</button>
        <button className="btn btn-danger mx-2" onClick={handleMinus}>-</button>
        <button className="btn btn-warning mx-2" onClick={handleMultiply}>*</button>
        <button className="btn btn-primary mx-2" onClick={handleDivide}>/</button>
      </div>

      <div>
        <label className="fw-bold me-2">Result:</label>
        <input
          type="text"
          value={result}
          disabled
          className="form-control d-inline-block w-auto"
        />
      </div>
    </div>
  );
};

export default CalculatorCOMP;
