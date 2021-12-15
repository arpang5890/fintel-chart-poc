import React from 'react';
import './sideBar.css';

const Sidebar= (props) => {

    const completeData = [...props.chartValue];
    
    var stdata = completeData.slice(500, 1000);
  	var chartRecords = [];
	chartRecords.push(['Tesla']);
  	for(var i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St1 = chartRecords;

	stdata = completeData.slice(1001, 1500);
  	chartRecords = [];
	chartRecords.push(['Apple']);
  	for(i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St2 = chartRecords;

    stdata = completeData.slice(1501, 2000);
  	chartRecords = [];
	chartRecords.push(['Google']);
  	for(i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St3 = chartRecords;
    
    stdata = completeData.slice(2001, 2500);
  	chartRecords = [];
	chartRecords.push(['Netflix']);
  	for(i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St4 = chartRecords;
    
    stdata = completeData.slice(301, 800);
  	chartRecords = [];
	chartRecords.push(['HP']);
  	for(i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St5 = chartRecords;
    
    stdata = completeData.slice(801, 1300);
  	chartRecords = [];
	chartRecords.push(['Micosoft']);
  	for(i=0;i<stdata.length;i++){
		chartRecords.push(stdata[i]);
	}
    const St6 = chartRecords;
    
    const handleChange = (element) => {
        var merge;
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
            case '5':
                merge = St5;
                break;
            case '6':
                merge = St6;
                break;
            default:
                merge = St1;
        }

        if(element.target.checked) {
            completeData.map((data,index) => {
                data.push(merge[index]);
                return data;
            })
        } else {
            const findIndex = completeData[0].indexOf(merge[0]);
            completeData.map((data) => {
                data.splice(findIndex,1);
                return data;
            });
        }

        props.parentCallback(completeData);

    }

    return (
        <div class="sidenav">
            <span className="f18">Stock List</span>
            <hr/>
            <input type="checkbox" id="stock1" onChange={ele => handleChange(ele)} name="Tesla" value="1" />
            <label for="vehicle1"> Tesla</label><br/>
            <input type="checkbox" id="stock2" onChange={ele => handleChange(ele)} name="Apple" value="2"/>
            <label for="vehicle2"> Apple</label><br/>
            <input type="checkbox" id="stock3"  onChange={ele => handleChange(ele)} name="Google" value="3"/>
            <label for="vehicle3"> Google</label><br/>
            <input type="checkbox" id="stock4"  onChange={ele => handleChange(ele)} name="Netflix" value="4"/>
            <label for="vehicle3"> Netflix</label><br/>
            <input type="checkbox" id="stock5"  onChange={ele => handleChange(ele)} name="HP" value="5"/>
            <label for="vehicle3"> HP</label><br/>
            <input type="checkbox" id="stock6"  onChange={ele => handleChange(ele)} name="Microsoft" value="6"/>
            <label for="vehicle3"> Microsoft</label><br/>
        </div>
    );
}

export default Sidebar;