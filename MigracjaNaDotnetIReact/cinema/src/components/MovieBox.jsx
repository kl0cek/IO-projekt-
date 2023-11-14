import React from "react";

import ScreeningDateBox from "./ScreeningDateBox";

const MovieBox = (props) =>
{
    return (
        <div style={{width: '100%', marginTop: '15px', padding: '30px 0px', display: 'flex', justifyContent: 'flex-start', borderBottom: '2px solid lightgray', color: 'black'}}>
            <div style={{width: '140px', height: '210px', backgroundColor: 'black'}}></div>
            <div style={{marginLeft: '20px', padding: '15px 0px'}}>
                <h1 style={{margin: '0px', padding: '0px'}}>{props.title}</h1>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <p style={{margin: '0px', padding: '0px', fontWeight: '400'}}>{props.director}</p>
                    <hr style={{margin: '10px', height: '16px', opacity: '50%'}} />
                    <p style={{margin: '0px', padding: '0px', fontWeight: '400'}}>{props.length}min</p>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', marginTop: '15px'}}>
                {props.screenings.map(screening => (
                    <ScreeningDateBox key={screening.id} screeningID={screening.id} date={screening.screeningDate}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MovieBox