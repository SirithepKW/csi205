import { useRef } from "react";
import { verifyUsers } from "../../data/users";


const Login = ({setToken, setRole}) => {
    const userRef = useRef()
    const passRef = useRef()
    
    return ( 
        <div 
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #ddefffff 0%, #a0faffff 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px"
            }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-lg border-0" style={{ borderRadius: "20px" }}>
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <div 
                                        className="d-inline-flex align-items-center justify-content-center mb-3"
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                            borderRadius: "50%",
                                            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                            color: "white",
                                            fontSize: "32px"
                                        }}
                                    >
                                        🔐
                                    </div>
                                    <h2 className="fw-bold" style={{ color: "#2c3e50" }}>Login into App</h2>
                                </div>

                                <div className="mb-3">
                                    <label 
                                        htmlFor="username" 
                                        className="form-label fw-semibold"
                                        style={{ color: "#34495e" }}
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Enter Username"
                                        style={{
                                            textAlign: "center",
                                            padding: "12px",
                                            borderRadius: "10px",
                                            border: "2px solid #e3f2fd",
                                            fontSize: "16px"
                                        }}
                                        ref={userRef}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label 
                                        htmlFor="password" 
                                        className="form-label fw-semibold"
                                        style={{ color: "#34495e" }}
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                        style={{
                                            textAlign: "center",
                                            padding: "12px",
                                            borderRadius: "10px",
                                            border: "2px solid #e3f2fd",
                                            fontSize: "16px"
                                        }}
                                        ref={passRef}
                                    />
                                </div>

                                <button 
                                    className="btn btn-success mt-3 w-100 fw-semibold" 
                                    style={{
                                        padding: "12px",
                                        borderRadius: "10px",
                                        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                        border: "none",
                                        fontSize: "16px"
                                    }}
                                    onClick={() => {
                                        const user = userRef.current.value.trim()
                                        const pass = passRef.current.value.trim()
                                        userRef.current.value = ''
                                        passRef.current.value = ''
                                        const userinfo = verifyUsers(user,pass)
                                        if (userinfo === null){
                                            alert("wrong user or pass")
                                            userRef.current.focus()
                                        } else{
                                            setToken(userinfo.token)
                                            setRole(userinfo.role)
                                        }
                                    }}
                                >
                                    Login
                                </button>

                                <div className="text-center mt-4">
                                    <small className="text-muted">
                                        Demo: username "user" / password "123"
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;