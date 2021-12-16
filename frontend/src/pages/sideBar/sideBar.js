import React, {useState} from 'react';
import './sideBar.css';

const Sidebar= (props) => {
    
    const [checkedState, setCheckedState] = useState([true, false, false, false]);
    var completeData = [...props.chartValue];
    const completeTimeFrame = props.timeFrame;

    completeData = completeData.slice(Math.max(completeData.length - 500, 1));
    const headingArr = [['Date', 'Open']];
    var closeData = ['Close'];
    var openData =['Open'];
    var highData = ['High'];
    var lowData = ['Low'];
    var initialData = completeData.map((data) => {
        closeData.push(data.close);
        openData.push(data.open);
        highData.push(data.high);
        lowData.push(data.low);
        return [data.date, data.open];
    });

  
    var newDisplayValue = [...props.updatedChartValue];
    
    var displayChartArr = [];
    if(newDisplayValue.length === 0) {
        displayChartArr = [...headingArr, ...initialData];
    } else {
        displayChartArr = [...newDisplayValue];
    }
    
    const St1 = openData;
    const St2 = closeData;
    const St3 = highData;
    const St4 = lowData;

    const handleChange = (element) => {
        var merge;
        const updateCheckedState =  checkedState.map((item, index) => 
            (index === element.target.value-1) ? !item : item
        );
        setCheckedState(updateCheckedState);
        
        switch(element.target.value) {
            case '1':
                merge = St1;

                break;
            case '2':
                merge = St2;                            
                break;
            case '3':
                merge =  St3;
                break;
            case '4':
                merge = St4;
                break;
            default:
                merge = St1;
        }

        if(element.target.checked) {
            const firstElement = merge.slice(0,1);
            const newMerge = merge.slice(Math.max(merge.length - completeTimeFrame, 1));
            const updatedMerge = [...firstElement, ...newMerge];
            displayChartArr.map((data,index) => {
                data.push(updatedMerge[index]);
                return data;
            });
        } else {
            const findIndex = displayChartArr[0].indexOf(merge[0]);
            displayChartArr.map((data) => {
                data.splice(findIndex,1);
                return data;
            });

        }
        
        props.parentCallback(displayChartArr, updateCheckedState);

    }

    return (
        <div class="sidenav">
            <span className="f18">Stock List</span>
            <hr/>
            <input type="checkbox" id="openPrice" onChange={ele => handleChange(ele)} name="openPrice" value="1" checked={checkedState[0]} />
            <label for="openPrice"> Open</label><br/>
            <input type="checkbox" id="closePrice" onChange={ele => handleChange(ele)} name="closePrice" value="2" checked={checkedState[1]} />
            <label for="closePrice"> Close</label><br/>
            <input type="checkbox" id="highPrice"  onChange={ele => handleChange(ele)} name="highPrice" value="3" checked={checkedState[2]} />
            <label for="highPrice"> High</label><br/>
            <input type="checkbox" id="lowPrice"  onChange={ele => handleChange(ele)} name="lowPrice" value="4" checked={checkedState[3]}/>
            <label for="lowPrice"> Low</label><br/>
        </div>
    );
}

export default Sidebar;