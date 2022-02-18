import React from 'react'
import './LeftComponent.css';
import logo1 from './logo1.svg';
import Arrow1 from './arrow1.svg';
import logo2 from './logo2.svg';
import logo3 from './logo3.svg';
import logo4 from './logo4.svg';
import Arrow2 from './arrow2.svg';


export default function LeftComponent() {
    return (
        <div className="LeftComponent">
            <div className="top">
                <button className="btn"><img src={logo1} alt="" /> Avalanche <img src={Arrow1} alt="" /></button>
                <button className="btn2"><img src={logo2} alt="" /> 0xf6...1353 <img src={Arrow2} alt="" /></button>
            </div>
            <h3><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.159832 4.55645L4.36365 0.352631L5.13492 1.1239L1.8622 4.39663H11.4546C11.7562 4.39663 12 4.64099 12 4.94209C12 5.24318 11.7562 5.48754 11.4546 5.48754H1.8622L5.13492 8.76027L4.36365 9.53154L0.159832 5.32772C-0.0534402 5.11445 -0.0534402 4.76972 0.159832 4.55645Z" fill="white" />
            </svg> Custom link
            </h3>
            <p>https://testnet.xyz.xyz/trade?ref=
            </p>
            <input className="input" type="text" placeholder='Enter'/>
            <div className="bottom">
                <button className="btn"><img src={logo3} alt="" /> Custom link </button>
                <button className="btn2"><img src={logo4} alt="" /> Cancel </button>
            </div>
        </div>
    )
}
