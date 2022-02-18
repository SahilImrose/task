import React from 'react'
import './MiddleComponent.css';
import Logo1 from './logo1.svg'
import Logo2 from './Logo2.svg'
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
import New from './new.svg'

export default function MiddleComponent() {
    return (
        <div className="MiddleComponent">
            <div className="top">

                <div className="underline">
                    <h2>Section</h2>
                    <div className="underline-child">
                    </div>
                </div>

                <div className="btn">
                    <button className="btn">
                        <img src={Logo1} alt="" />
                        0.2 $XYZ
                        <div><span>Tier 1</span></div>
                    </button>
                </div>
            </div>

            <div className="tutorial-parent">
                <div className="tutorial">
                    <div className="st">
                        <p>Lorem Ipsum is simply dummy text of the printing.</p>
                        <button className="btn">Tutorial</button>
                    </div>
                    <div className="nd">
                        <img src={Logo2} alt="" />
                    </div>
                </div>
            </div>

            <div className="rewards">
                <div className="text">
                    <p>Your Rewards</p>
                    <h2>$ 0.26231428</h2>
                    <div ><button className="btn">$40 AVAX</button><button className="btn">$10 BNB</button><button className="btn">$210 BTC</button></div>
                </div>
                <button className="btn2">
                    <img src={logo3} alt="" />
                    Custom link
                </button>

            </div>

            <div className="refral-parent">
                <div className="refral">
                    <div className="first">
                        <img src={logo4} alt="" />
                        <h3>12.5% of free</h3>
                    </div>
                    <p>Your Referral Link for xyz</p>
                    <input className="input" type="text" placeholder='Enter' />
                </div>
                <div className="refral">
                    <div className="first">
                        <img src={logo4} alt="" />
                        <h3>12.5% of free</h3>
                    </div>
                    <p>Your Referral Link for xyz</p>
                    <input className="input" type="text" placeholder='Enter' />
                </div>
            </div>
            <div className="underline2">
                    <h2>First Tab</h2>
                    <div className="underline-child2">
                    </div>
                </div>
        <img src={New} alt="" />
        </div>
    )
}
