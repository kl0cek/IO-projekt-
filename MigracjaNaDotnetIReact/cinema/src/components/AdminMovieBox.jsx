import React from "react";

import { MdDeleteForever } from "react-icons/md";
import { BsCheckSquareFill } from "react-icons/bs";

const AdminMovieBox = props => {
    return(
        <>
        <div style={{width: "100%", marginTop: "30px", display: "flex", justifyContent: "space-between", border: "1px solid black", padding: "30px"}}>
            <div style={{display: "flex", width: "50%", flexDirection: "column"}}>
                <label style={{display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <span style={{marginRight: "15px", fontSize: "20px"}}>Tytuł: </span>
                    <input type="text" defaultValue={props.title} style={{outline: "none", padding: "10px", fontSize: "16px"}}/>
                </label>
                <label style={{display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <span style={{marginRight: "15px", fontSize: "20px"}}>Reżyser: </span>
                    <input type="text" defaultValue={props.director} style={{outline: "none", padding: "10px", fontSize: "16px"}}/>
                </label>
                <label style={{display: "flex", width: "70%", justifyContent: "space-between"}}>
                    <span style={{marginRight: "15px", fontSize: "20px"}}>Długość: </span>
                    <input type="number" defaultValue={props.length} style={{outline: "none", padding: "10px", fontSize: "16px"}}/>
                </label>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}}>
                <MdDeleteForever style={{fontSize: "30px", color: "red"}}/>
                <BsCheckSquareFill style={{fontSize: "20px", color: "green", marginTop: "20px"}}/>
            </div>
        </div>
        <div style={{width: "60%", display: "flex", flexDirection: "column", border: "1px solid black", borderTop: "none", padding: "10px 40px"}}>
            <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                <b><p>Pokój</p></b>
                <b><p>Data</p></b>
                <b><p></p></b>
            </div>
            {props.screenings.map(screening => (
                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <select name="rooms" style={{padding: "10px", outline: "none"}}>
                        <option value="1">Room 1</option>
                        <option value="2" selected>Room 2</option>
                    </select>
                    <input type="datetime-local" name="date" defaultValue={screening.screeningDate} />
                    <MdDeleteForever style={{fontSize: "20px", color: "red"}}/>
                </div>
            ))}
        </div>
        <hr style={{width: "100%", marginTop: "40px"}}/>
        </>
    )
}

export default AdminMovieBox