import React from 'react';
import './header.css';

const Header = (props) => {
    const comP = [...props.completeData];

    const handleTimeLine = (element) => {
        var timeFrame;
        console.log(element.target.innerHTML);
        switch(element.target.innerHTML) {
            case '1m':
                timeFrame = 30;
                break;
            case '3m':
                timeFrame = 90;
                break;
            case '6m':
                timeFrame = 180;
                break;
            case '1 year':
                timeFrame = 365;
                break;
            default:
                timeFrame = 500;

        }
        console.log(timeFrame);
        const newComp = comP.slice(0, timeFrame);
        
        props.headerParentCall(newComp);
    }
    return (
        <>
            <div className="marginB" ><b>Time Frame:</b> <button onClick={elem => handleTimeLine(elem)}>1m</button> <button onClick={elem => handleTimeLine(elem)}>3m</button> <button onClick={elem => handleTimeLine(elem)}>6m</button> <button onClick={elem => handleTimeLine(elem)}>1 year</button> <button onClick={elem => handleTimeLine(elem)}>All</button> </div>
            <hr />
        </>
    );
}

export default Header

