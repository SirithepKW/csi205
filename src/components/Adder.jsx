import React from "react";
import { useState } from "react";

const Adder = ({name}) => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div
      className="border border-2 border-black rounded-3 p-3 m-auto"
      style={{ width: "fit-content" }}
    >
      <div className="text-center text-primary">{name || "ADDER"}</div>
      <div className="text-center fw-bold fs-4">A + B = {a + b}</div>

      <div className="d-flex justify-content-around">
        <div>
          <div className="text-center fw-bold fs-4">A</div>
          <div className="btn-group">
            <button className="btn btn-danger" onClick={() => setA(a - 1)}>
              &minus;
            </button>
            <div className="text-center fw-bold fs-4 border border-1 px-3 border-secondary">{a}</div>
            <button className="btn btn-success" onClick={() => setA(a + 1)}>
              +
            </button>
          </div>
        </div>
        
        <div>
          <div className="text-center fw-bold fs-4">B</div>
          <div className="btn-group">
            <button className="btn btn-danger" onClick={() => setB(b - 1)}>
              &minus;
            </button>
            <div className="text-center fw-bold fs-4 border border-1 px-3 border-secondary">{b}</div>
            <button className="btn btn-success" onClick={() => setB(b + 1)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adder;