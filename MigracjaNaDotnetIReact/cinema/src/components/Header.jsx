import React, {useState} from "react";
import { useUser } from "../context/UserContext";
import LoginBox from "./LoginBox";

const Header = () => {
    const {userData, setUser} = useUser();
    const [showLoginBox, setShowLoginBox] = useState(false);

    return (
        <div style={{width: '100%', height: '100px', padding: '0px', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', color: 'white'}}>
            <div style={{width: '100%',maxWidth: '1000px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1>LOGO</h1>
                {userData === null ?
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <p onClick={() => setShowLoginBox(true)}>Logowanie</p>
                    <hr style={{margin: '0px 10px', height: '30px', opacity: '50%'}}></hr>
                    <p>Rejestracja</p>
                </div>
                :
                <div>
                    <p>Witaj, {userData.firstName}</p>
                </div> 
                }
            </div>
            {showLoginBox ? <LoginBox /> : null}
        </div>
    )
}

export default Header