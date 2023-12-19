import React, {useState} from "react";
import { useUser } from "../context/UserContext";

import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";
import { CiLogout } from "react-icons/ci";

const Header = () => {
    const {getUser, setUser} = useUser();
    const [showLoginBox, setShowLoginBox] = useState(false);
    const [showRegisterBox, setShowRegisterBox] = useState(false);

    const logout = () => {
        setUser(null);
    }

    return (
        <>
        <div style={{width: '100%', height: '100px', padding: '0px', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', color: 'white'}}>
            <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>LOGO</h1>
                {getUser() === null ?
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p onClick={() => setShowLoginBox(true)} style={{cursor: "pointer"}}>Logowanie</p>
                    <hr style={{margin: '0px 10px', height: '30px', opacity: '50%'}}></hr>
                    <p onClick={() => setShowRegisterBox(true)} style={{cursor: "pointer"}}>Rejestracja</p>
                </div>
                :
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <p>Witaj, {getUser().firstName}</p>
                    <CiLogout onClick={logout} style={{color: "white", marginLeft: "20px", marginTop: "2px", fontSize: "20px", cursor: "pointer"}} />
                </div> 
                }
            </div>
        </div>
        {showLoginBox ? <LoginBox /> : null}
        {showRegisterBox ? <RegisterBox /> : null}
        </>
    )
}

export default Header