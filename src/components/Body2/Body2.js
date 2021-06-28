import React from 'react'
import burger1 from '../../images/burger1.png'
import burger2 from '../../images/burger2.png'
import './Body2.css'

export default function Body2() {
    return (
        <div>
            <div className="body2">
                <div className="container">
                    <div className="gallery">

                        <div className="item">		
                            <img src={burger1} alt=""/>
                            <h1>Lorem Ipsum Dolor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <button>Order Now</button>
                        </div>
                        <div className="item">
                            <img src={burger2} alt=""/>
                            <h1>Lorem Ipsum Dolor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <button>Order Now</button>
                        </div>	
                        <div className="item">			
                            <img src={burger1} alt=""/>
                            <h1>Lorem Ipsum Dolor</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <button>Order Now</button>	
                        </div>	
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
