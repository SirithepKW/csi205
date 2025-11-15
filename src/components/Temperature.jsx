import React from "react";
import { useState } from "react";

const Temperatures = function (props) {

    const [tempC, setTempC] = useState(25.0);

    // temp converter
    const CtoF = (c) => c * 9 / 5 + 32;
    const CtoK = (c) => c + 273.15;

    // value converter
    const tempChanger = (type, delta) => {
        if (type === "C") {
            setTempC((prev) => prev + delta);
        } else if (type === "F") {
            // F to C calculation
            const c = ((CtoF(tempC) + delta) - 32) * 5 / 9;
            setTempC(c);
        } else if (type === "K") {
            // K change is the same as C change
            const c = tempC + delta;
            setTempC(c);
        }
    };

    return (
        <div className="border border-4 border-danger rounded-4 p-4 m-auto shadow-lg bg-light">
            <h5 className="text-center fw-bolder fs-3 text-dark mb-4">TEMP CONTROLLER</h5>

            <div className='d-flex flex-column flex-sm-row justify-content-around gap-4' >

                {/* C temp */}
                <div className="p-3 bg-secondary-subtle rounded-3 shadow-sm flex-fill"> 
                    <div className='text-secondary fw-bold mb-2 text-decoration-underline text-center'>CELSIUS</div>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <button className="btn btn-danger btn-md shadow"
                            onClick={() => tempChanger("C", -1)}
                        >–</button>
                        <div className='border rounded-pill px-4 py-2 bg-info-subtle fw-bolder fs-5 text-center' style={{ minWidth: '100px', padding: '0.375rem 1.5rem' }}>
                            {tempC.toFixed(2)}
                        </div>
                        <button className='btn btn-success btn-md shadow' onClick={() => tempChanger('C', +1)}
                        >+</button>
                    </div>
                    <small className='text-muted text-center d-block mt-1'>°C</small>
                </div>

                {/* F temp */}
                <div className="p-3 bg-secondary-subtle rounded-3 shadow-sm flex-fill"> 
                    <div className="text-secondary fw-bold mb-2 text-decoration-underline text-center">FAHRENHEIT</div>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <button className='btn btn-danger btn-md shadow' onClick={
                            function () { tempChanger("F", -1) }
                        }>–</button>
                        <div className="border rounded-pill px-4 py-2 bg-info-subtle fw-bolder fs-5 text-center" style={{ minWidth: '100px', padding: '0.375rem 1.5rem' }}>
                            {CtoF(tempC).toFixed(2)}
                        </div>
                        <button className="btn btn-success btn-md shadow" onClick={() => tempChanger("F", +1)}>
                            +</button>
                    </div>
                    <small className="text-muted text-center d-block mt-1">°F</small>
                </div>

                {/* K temp */}
                <div className="p-3 bg-secondary-subtle rounded-3 shadow-sm flex-fill"> 
                    <div className='text-secondary fw-bold mb-2 text-decoration-underline text-center'>KELVIN</div>
                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <button className="btn btn-danger btn-md shadow"
                            onClick={() => tempChanger("K", -1)}
                        >–</button>
                        <div className="border rounded-pill px-4 py-2 bg-info-subtle fw-bolder fs-5 text-center" style={{ minWidth: '100px', padding: '0.375rem 1.5rem' }}>
                            {CtoK(tempC).toFixed(2)}
                        </div>
                        <button className='btn btn-success btn-md shadow' onClick={
                            function () { tempChanger("K", +1) }
                        }
                        >+</button>
                    </div>
                    <small className="text-muted text-center d-block mt-1">K</small>
                </div>

            </div>
        </div>
    );
};

export default Temperatures;
