//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter(digit){
    return(<div>
        <div className="CounterHolder">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="sixDigit">{digit.dSix%10}</div>
            <div className="fiveDigit">{digit.dFive%10}</div>
            <div className="fourDigit">{digit.dFour %10}</div>
            <div className="threeDigit">{digit.dThree %10}</div>
            <div className="twoDigit">{digit.dTwo%10}</div>
            <div className="oneDigit">{digit.dOne%10}</div>
        </div>
    </div>)
}
SimpleCounter.PropTypes={
    dOne: PropTypes.number,
    dTwo: PropTypes.number,
    dThree: PropTypes.number,
    dFour: PropTypes.number,
    dFive: PropTypes.number,
    dSix: PropTypes.number,
};

let counter=0;
setInterval(function(){
    const six=Math.floor(counter/100000)
    const five=Math.floor(counter/10000)
    const four=Math.floor(counter/1000)
    const three=Math.floor(counter/100)
    const two=Math.floor(counter/10)
    const one=Math.floor(counter/1)
    counter++
    ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter dOne={one} dTwo={two} dThree={three} dFour={four} dFive={five} dSix={six}/>);

},1000)

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter/>);

