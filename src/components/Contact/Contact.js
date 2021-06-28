import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <div>
            <div className="form">
                <div className="container">
                    <div className="top">
                        <h2>RESERVATION</h2>
                        <h1>BOOK YOUR TABLE</h1>
                    </div>
                    <form action="">
                        <div>
                            <input className="left" type="text" placeholder="name"/>
                            <input className="right" type="email" placeholder="email"/>
                        </div>
                        <div>
                            <input className="left" type="date" name="" id=""/>
                            <input className="right" type="time" name="" id=""/>
                        </div>
                        <div>
                            <input className="left" type="number" placeholder="people"/>
                            <input className="btn" type="submit" value="find a table"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
