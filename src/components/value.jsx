import { useEffect } from "react"
import { useState } from "react"

const value = function({name,initial,type}) {
    const [value,SetValue] = useState(0)

        useEffect( function(){
        SetValue(initial || 0)
        },[initial])
    return(
        <div className="border border-black border-2 m-auto rounded-3 p-2 bg-secondary-subtle mt-3" style={{width: 'fit-content'}}>
            <h1 className="text-primary text-center">{name || "VALUE"}</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-danger" onClick={ function(){SetValue( function(p) { return p - 1} )}}>&minus;</button>
                    <div className="fs-2">{ type === "real" ? value.toFixed(2): Math.round(value)}</div>
                    <button className="btn btn-success" onClick={ function(){SetValue( function(p) { return p + 1} )}}>+</button>
                </div>
        </div>
    )

}

export default value