import React, { useEffect, useRef, useState } from "react";
import "./AnimatedFieldCSS.css";

const AnimatedField = () => {
  // Variables
  const fieldW = 650;
  const fieldH = 300;
  const BallDiameter = 50;

  const maxX = fieldW - BallDiameter - 2;
  const maxY = fieldH - BallDiameter - 2;

  // State
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [vx] = useState(5);
  const [vy] = useState(5);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState("none");

  // Refs for DOM elements
  const ballRef = useRef(null);
  const fieldRef = useRef(null);

  // Image sources
  const imgs = {
    basketball: "/csi205/imgs/basketball.png",
    football: "/csi205/imgs/football.png",
    volleyball: "/csi205/imgs/volleyball.png",
    human: "/csi205/imgs/67163153.png",
    cartoon: "/csi205/imgs/cartoon.png",
  };

  const fields = {
    basketball: "/csi205/imgs/basketballField.png",
    football: "/csi205/imgs/footballField.png",
    volleyball: "/csi205/imgs/volleyballField.png",
    cartoon: "/csi205/imgs/bikinibottom.png",
  };

  // Ball + Field Render
  useEffect(() => {
    const ball = ballRef.current;
    const field = fieldRef.current;

    if (!ball || !field) return;

    if (selected === "none") {
      ball.style.backgroundImage = "none";
      field.style.backgroundImage = "none";
    } else {
      ball.style.backgroundImage = `url(${imgs[selected]})`;
      field.style.backgroundImage = fields[selected]
        ? `url(${fields[selected]})`
        : "none";
    }
  }, [selected]);

  // Ball Movement Logic
  const calculate = (x, y, goRight, goDown) => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;

    if (goRight) {
      newX += vx;
      if (newX >= maxX) newGoRight = false;
    } else {
      newX -= vx;
      if (newX <= 0) newGoRight = true;
    }

    if (goDown) {
      newY += vy;
      if (newY >= maxY) newGoDown = false;
    } else {
      newY -= vy;
      if (newY <= 0) newGoDown = true;
    }

    return { newX, newY, newGoRight, newGoDown };
  };

  //  Ball Loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (!running) return;
      const result = calculate(x, y, goRight, goDown);
      setX(result.newX);
      setY(result.newY);
      setGoRight(result.newGoRight);
      setGoDown(result.newGoDown);
    }, 25);

    return () => clearInterval(interval);
  }, [x, y, goRight, goDown, running]);

  // Keyboard Handler
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space") setRunning((r) => !r);

      const keyMap = {
        Digit1: "basketball",
        Numpad1: "basketball",
        Digit2: "football",
        Numpad2: "football",
        Digit3: "volleyball",
        Numpad3: "volleyball",
        Digit4: "human",
        Numpad4: "human",
        Digit5: "cartoon",
        Numpad5: "cartoon",
        Digit0: "none",
        Numpad0: "none",
      };

      if (keyMap[e.code]) {
        setSelected(keyMap[e.code]);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div className="Aniamtion-Container">
      <div
        ref={fieldRef}
        id="field"
        className="animate-fields"
        style={{
          width: `${fieldW}px`,
          height: `${fieldH}px`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div
          ref={ballRef}
          id="ball"
          className="anim-ball"
          style={{
            width: `${BallDiameter}px`,
            height: `${BallDiameter}px`,
            left: `${x}px`,
            top: `${y}px`,
            position: "relative",
          }}
        ></div>
      </div>

      <div className="animate-control">
        <button
          id="run"
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={() => setRunning((r) => !r)}
        >
          {running ? (
            <>
              <i className="bi bi-pause-circle-fill">&nbsp;</i> PAUSE
            </>
          ) : (
            <>
              <i className="bi bi-play">&nbsp;</i> RUN
            </>
          )}
        </button>

        <div style={{ marginTop: "1rem" }}>
          {["none", "basketball", "football", "volleyball", "human", "cartoon"].map(
            (type) => (
              <button
                key={type}
                className={`btn ${
                  selected === type
                    ? type === "none"
                      ? "btn-secondary"
                      : "btn-primary"
                    : type === "none"
                    ? "btn-outline-secondary"
                    : "btn-outline-primary"
                } m-1`}
                onClick={() => setSelected(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimatedField;
