import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UPH = () => {
    const navigate = useNavigate()
    useEffect( () => navigate("../home"), [])
    return <h2>Forward To Home</h2>;
}
 
export default UPH;