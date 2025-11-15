import { useState } from "react"

function RadixCounter () {

    const [value, setvalue] = useState(0)


    const MinusClick = function() {
       if (value <= 0) {
        setvalue(4095)
       }else{
        setvalue(previous => previous-1)
       }

       
    }

    const ResetClick = function() {

    }

    const PlusClick = function() {
        if (value >= 4095) {
        setvalue(0)
       }else{
        setvalue(previous => previous+1)
       }
    }



    return (
        //Container
        <div className="border border-2 border-black rounded-3 p-3 m-auto mt-2" style={{width: '400px'}}>
            {/* Title */}
            <div className="text-center fw-bold fs-2">Radix Counter</div>

            {/* Body */}
            <div className="d-flex justify-content-between mt-2">
                <div className="text-center"><span className="fw-bold">[HEX]</span> <div className="font-monospace">{value.toString(16).toUpperCase().padStart(3, '0')}</div></div>
                <div className="text-center"><span className="fw-bold">[DEC]</span> <div className="font-monospace text-primary">{value.toString().padStart(4,'0')}</div></div>
                <div className="text-center"><span className="fw-bold">[OCT]</span> <div className="font-monospace">{value.toString().padStart(4,'0')}</div></div>
                <div className="text-center"><span className="fw-bold">[BIN]</span> <div className="font-monospace">{value.toString().padStart(12,'0')}</div></div>
            </div>

            {/* Buttons */}
            <div className="mt-3 d-flex justify-content-around">
                <button className="btn btn-danger px-4" onClick={MinusClick}>&minus;</button>
                <button className="btn btn-secondary px-4" onClick={ResetClick}>RESET</button>
                <button className="btn btn-success px-4" onClick={PlusClick}>+</button>
            </div>
        </div>
    )
}

export default RadixCounter