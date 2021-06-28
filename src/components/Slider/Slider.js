import React from 'react'
import b3Dot from '../../images/b3 dot.png'
import b3Burger from '../../images/b3 burger.png'
import './Slider.css'

export default function Slider() {
    return (
        <div>
            <div className="slider">
                <div className="container">
                    <div className="slider-content">
                        <div className="slider-left">
                            <div className="slider-text">
                                <h3>Discover</h3>
                                <h1>Upcoming Events</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>
                            <div className="slider-dot">
                                <img src={b3Dot}alt =""/>	
                            </div>
                        </div>
                        <div className="slider-right">
                            <img src={ b3Burger}width="100%" alt = "" />	
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
