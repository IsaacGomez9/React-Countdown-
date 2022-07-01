import React from 'react'
import starts from "../images/bg-stars.svg"
import foter from "../images/pattern-hills.svg"
import facebook from "../images/icon-facebook.svg"
import intagram from "../images/icon-instagram.svg"
import pinterest from "../images/icon-pinterest.svg"



function contador({ Days, Hours, Minutes, Seconds }) {




    return (
        <div className="container">
            <div className="estrellas">
                <img src={starts} alt="start" />
            </div>
            <h1>Tu cumpleaños en</h1>
            <div className="CountDown">
                <div>
                    <p>{Days}</p>
                    <h3>Days</h3>
                </div>
                <div>
                    <p>{Hours}</p>
                    <h3>Hours</h3>
                </div>
                <div>
                    <p>{Minutes}</p>
                    <h3>Minutes</h3>
                </div>
                <div>
                    <p>{Seconds}</p>
                    <h3>Seconds</h3>
                </div>
            </div>
            <div className="socials">
                <ul>
                    <li><img src={facebook} alt="" /></li>
                    <li ><img src={intagram}alt="" /></li>
                    <li><img src={pinterest} alt="" /></li>
                </ul>
            </div>
            <div className="foter">
                <img src={foter} alt="foter" />
            </div>
        </div>
    )
}

export default contador