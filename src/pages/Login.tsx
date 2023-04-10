import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AdminType, AdminErrorMsgType} from "../types/types";
import {removeAllLoginErrorBorders} from "../dom-ref/methods";
import {adminLoginValidation} from "../validations/validations";

function Login() {
    const [admin, setAdmin] = useState<AdminType>({username: "", password: ""});
    const [adminErrorMsg, setAdminErrorMsg] = useState<AdminErrorMsgType>({userErrorMsg: "", passErrorMsg: ""});
    const navigate = useNavigate();

    // When username and password input fields are changed, the admin state will be changed accordingly.
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setAdminErrorMsg({userErrorMsg: "", passErrorMsg: ""});
        removeAllLoginErrorBorders();
        const {name, value} = event.target;
        setAdmin(prevState => {
            return {...prevState, [name]: value}
        });
    }

    // When login button is pressed, validate the inputs and log in to Dashboard.
    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (admin.username !== "admin" || admin.password !== "admin123") {
            adminLoginValidation(admin, setAdminErrorMsg);
            return;
        }
        navigate("/dashboard");
    }

    return (
        <div className={"centered-element"}>
            <img className={"login-img"} src={"./images/login-logo.png"} width={"150px"} alt={"login-logo"}/>
            <div className={"login-container"}>
                <h1>Admin Login</h1>
                <br/>
                <form onSubmit={handleLogin} className={"login-form"}>
                    <input onChange={handleChange} id={"username"} type={"text"} name={"username"}
                           placeholder={"Username"} value={admin.username}/>
                    <h4 className={"error-text"}>{adminErrorMsg.userErrorMsg}</h4>
                    <input onChange={handleChange} id={"password"} type={"password"} name={"password"}
                           placeholder={"Password"} value={admin.password}/>
                    <h4 className={"error-text"}>{adminErrorMsg.passErrorMsg}</h4>
                    <button type={"submit"}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;