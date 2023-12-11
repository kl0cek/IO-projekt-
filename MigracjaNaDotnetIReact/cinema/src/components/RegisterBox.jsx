import React, {useState} from "react";

import { useUser } from "../context/UserContext";
import APIHandler from "../API/APIHandler";
import LoginBox from "./LoginBox";

const RegisterBox = () => {
    const {setUser} = useUser();
    const [errorMessage, setErrorMessage] = useState("");
    const [showError, setShowError] = useState(false);
    const [close, setClose] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isAdmin: false
    })

    const switchToLogin = () => {
        setShowLogin(true);
        setClose(true);
    }

    const setFirstName = e => {
        setUserData(prevState => ({
            ...prevState,
            firstName: e.target.value
        }))
    }

    const setLastName = e => {
        setUserData(prevState => ({
            ...prevState,
            lastName: e.target.value
        }))
    }

    const setEmail = e => {
        setUserData(prevState => ({
            ...prevState,
            email: e.target.value
        }))
    }

    const setPassword = e => {
        setUserData(prevState => ({
            ...prevState,
            password: e.target.value
        }))
    }

    const userExist = async () => {
        const result = await APIHandler.getUser(userData.email)
        if (result.status === 'success') {
            return true;
        }
        else {
            return false;
        }
    }

    const postUser = async () => {
        const result = await APIHandler.postUser(userData);
        if (result.status === 'success') {
            const {reservations, ...newUser} = result.data;
            setUser(newUser);
            setClose(true);
        }
        else {
            //HANDLE ERROR
            return;
        }
    }

    const submit = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (userData.firstName.trim().length <= 0) {
            setErrorMessage('Pole "Imię" nie może być puste');
            setShowError(true)
        }
        else if (userData.lastName.trim().length <= 0) {
            setErrorMessage('Pole "Nazwisko" nie może być puste');
            setShowError(true)
        }
        else if (!emailRegex.test(userData.email)) {
            setErrorMessage('Pole "Email" ma nieprawidłowy format');
            setShowError(true)
        }
        else if (!passwordRegex.test(userData.password)) {
            setErrorMessage('Pole "Hasło" nie spełnia wymagań');
            setShowError(true)
        }
        else if (await userExist()) {
            setErrorMessage('Użytkownik już istnieje');
            setShowError(true)
        }
        else {
            setShowError(false);
            postUser();
        }
    }

    return(
        <>
        <div style={{width: "100%", height: "100vh", position: "absolute", top: "0", backgroundColor: "rgba(0,0,0,0.3)", display: `${close ? "none" : "flex"}`, justifyContent: "center", alignItems: "center"}}>
            <div style={{width: "400px", padding: "30px 0px", backgroundColor: "white", borderRadius: "15px", border: "1px solid orange", display: "flex", flexDirection: "column", alignItems: "center", color: "black"}}>
                <h2 style={{marginTop: "0px"}}>Zarejestruj się</h2>
                {showError ? 
                <div style={{width: "60%", backgroundColor: "#E57373", border: "1px solid red", borderRadius: "5px", color: "white", textAlign: "center", padding: "10px 10px"}}>
                    {errorMessage}
                </div>
                : null}
                <div style={{display: "flex", flexDirection: "column", width: "60%"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Imię:</p>
                    <input onChange={setFirstName} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="text" placeholder="E.g. John" name="firstName"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "60%", marginTop: "15px"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Nazwisko:</p>
                    <input onChange={setLastName} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="text" placeholder="E.g. Smith" name="lastName"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "60%", marginTop: "15px"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Adres Email:</p>
                    <input onChange={setEmail} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="email" placeholder="you@example.com" name="email"/>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "60%", marginTop: "15px"}}>
                    <p style={{margin: "5px 5px", fontWeight: "600"}}>Hasło:</p>
                    <input onChange={setPassword} style={{padding: "10px", borderRadius: "5px", border: "1px solid orange", outline: "none"}} type="password" placeholder="Enter your password" name="password"/>
                </div>
                <p onClick={switchToLogin} style={{cursor: "pointer", fontSize: "13px", margin: "15px 0px"}}>lub <span style={{color: "orange"}}>ZALOGUJ SIĘ</span></p>
                <button onClick={submit} style={{cursor: "pointer", padding: "15px 25px", fontWeight: "600", marginTop: "0px", color: "white", backgroundColor: "orange", border: "none", borderRadius: "15px"}}>Zarejestruj się</button>
            </div>
        </div>
        {showLogin ? <LoginBox /> : null}
        </>
    )
}

export default RegisterBox