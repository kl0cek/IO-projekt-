import React, {useState} from "react";

import RegisterBox from "./RegisterBox";

import { useUser } from "../context/UserContext";
import APIHandler from "../API/APIHandler";

const LoginBox = () => {
    const {setUser} = useUser();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("Użytkownik nie istnieje");
    const [showError, setShowError] = useState(false);
    const [close, setClose] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const updateLogin = e => {
        setLogin(e.target.value);
    }

    const updatePassword = e => {
        setPassword(e.target.value);
    }

    const submit = () => {
        if (login.trim().length <= 0) {
            setError("Pola nie mogą być puste")
            setShowError(true)
        }
        else {
            fetchData();
        }
    }

    const fetchData = async () => {
        const result = await APIHandler.getUser(login);
        if (result.status === 'success') {
            if (result.data.password !== password) {
                setError("Hasło nie prawidłowe");
                setShowError(true);
            }
            else {
                setUser(result.data);
                setClose(true);
                setShowError(false);
            }
        }
        else {
            setError(result.error)
            setShowError(true);
        }
    }

    const switchToRegister = () => {
        setClose(true);
        setShowRegister(true);
    }

    return (
        <>
        <div style={{width: "100%", height: "100vh", position: "absolute", top: "0", backgroundColor: "rgba(0,0,0,0.3)", display: `${close ? "none" : "flex"}`, justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "400px", padding: "30px 0px", backgroundColor: "white", borderRadius: "15px", border: "1px solid orange", display: "flex", flexDirection: "column", alignItems: "center", color: "black"}}>
                <h2 style={{marginTop: "0px"}}>Zaloguj sie</h2>
                {showError ? 
                <div style={{width: "60%", backgroundColor: "#E57373", border: "1px solid red", borderRadius: "5px", color: "white", textAlign: "center", padding: "10px 0px"}}>
                    {error}
                </div>
                : null}
                <div style={{display: "flex", flexDirection: "column", width: "60%"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Adres Email:</p>
                    <input onChange={updateLogin} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="email" placeholder="you@example.com" name="email"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "60%", marginTop: "15px"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Hasło:</p>
                    <input onChange={updatePassword} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="password" placeholder="Enter your password" name="password"/>
                </div>
                <p onClick={switchToRegister} style={{cursor: "pointer", fontSize: "13px", margin: "15px 0px"}}>lub <span style={{color: "orange"}}>ZAREJESTRUJ SIĘ</span></p>
                <button onClick={submit} style={{cursor: "pointer", padding: "15px 25px", fontWeight: "600", marginTop: "0px", color: "white", backgroundColor: "orange", border: "none", borderRadius: "15px"}}>Zaloguj</button>
            </div>
        </div>
        {showRegister ? <RegisterBox /> : null}
        </>
    )
}

export default LoginBox