import React, { useState, useEffect } from "react";

const INITIAL_SECONDS = 86400; 

const Timer = function(){
    const [second,setSecond] = useState(INITIAL_SECONDS);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        
        if (isRunning && second > 0) {
            intervalId = setInterval(() => {
                setSecond(prevSec => prevSec - 1);
            }, 1000);
        } else if (second === 0) {
            setIsRunning(false);
        }

       
        return () => clearInterval(intervalId);
    }, [isRunning, second]); 

    const convertToString = function(totalSeconds){
        const SECONDS_IN_MINUTE = 60;
        const SECONDS_IN_HOUR = 3600;
        const SECONDS_IN_DAY = 86400;

        // คำนวณวัน
        const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
        let remaining = totalSeconds % SECONDS_IN_DAY;

        // คำนวณชั่วโมง
        const hours = Math.floor(remaining / SECONDS_IN_HOUR);
        remaining = remaining % SECONDS_IN_HOUR;

        // คำนวณนาที
        const minutes = Math.floor(remaining / SECONDS_IN_MINUTE);
        
        // คำนวณวินาทีที่เหลือ
        const seconds = remaining % SECONDS_IN_MINUTE;

        const pad = (num) => String(Math.floor(num)).padStart(2, '0');

        return `${pad(days)} วัน : ${pad(hours)} ชม. : ${pad(minutes)} น. : ${pad(seconds)} วินาที`;
    }

    // --- Handlers ---
    const startStopTimer = () => {
        if (!isRunning && second === 0) {
             setSecond(INITIAL_SECONDS);
        }
        setIsRunning(prev => !prev);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setSecond(INITIAL_SECONDS);
    };

    const runButtonText = isRunning ? "หยุด" : (second === 0 ? "เริ่มใหม่" : "เริ่ม");
    const runButtonIcon = isRunning ? "bi bi-pause" : "bi bi-play";
    const runButtonClass = isRunning ? "btn-warning text-dark" : "btn-success";

    return(
        <div className="d-flex flex-column align-items-center justify-content-center bg-light">
        <div className="card shadow-lg border border-secondary rounded-4 text-center p-4" style={{ maxWidth: "500px" }}>
        <h1 className="display-5 fw-bold text-primary mb-4">TIMER</h1>

        <div className="bg-white border border-2 rounded-3 p-4 mb-4 shadow-sm w-100">
        <p className="fs-5 text-secondary mb-1">{convertToString(second)}</p>
        <p className="display-3 fw-bolder text-dark mb-0">{second}</p>
        </div>

        <div className="d-flex gap-3 justify-content-center">
        <button
        className="btn btn-danger fw-semibold px-4 py-2 shadow-sm"
        onClick={resetTimer}
        >
        <i className="bi bi-arrow-counterclockwise"></i>&nbsp;รีเซ็ต
        </button>

        <button
        className={`btn ${runButtonClass} fw-semibold px-4 py-2 shadow-sm`}
        onClick={startStopTimer}
        >
        <i className={runButtonIcon}></i>&nbsp;{runButtonText}
        </button>
        </div>
        </div>
        </div>

    )
}

export default Timer
