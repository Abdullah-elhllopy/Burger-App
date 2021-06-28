import React from 'react'
import b1left   from '../../images/b1 left.png'
import b1right   from '../../images/b1 right-t.png'
import b1  from '../../images/b1 right-b.png'
import './Body1.css'

export default function Body1() {
    return (
    <div>
        <div className="body1">
            <div className="container">
                <div className="category">
                    <div className="cat-left">
                        <img src={b1left} alt=""/>
                        <div className=	"category-img-desc">
                            <h3>Try it today</h3>
                            <h1>Most popular burger</h1>
                        </div>
                    </div>

                    <div className="cat-right">
                        <div className="cat-right-top">
                            <img src={b1right} alt = ""/>	
                            <div className=	"category-img-desc">
                                <h3>Try it today</h3>
                                <h1>Most Fun</h1>
                                <h1 className="h">Most Taste</h1>
                            </div>
                        </div>

                        <div className="cat-right-bottom">
                            <img src={b1} alt="" />	
                            <div className=	"category-img-desc">
                                <h3>Try it today</h3>
                                <h1>Fresh & Chili</h1>
                            </div>
                        </div>

                     </div>
                </div>
            </div>
        </div>

    <div className="but-tasty">
        <button type="button">always tasty burger</button>
    </div>
    <div className="plain-text">
        <h1>Choose & Enjoy</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis<br className="plaint-text-br"/>ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
    </div>
 </div>

    )
}
