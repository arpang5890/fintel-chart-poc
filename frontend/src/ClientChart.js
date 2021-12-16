import './App.css';
import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";
import  Sidebar from './pages/sideBar/sideBar';
import  Header  from './pages/header/header';
// import { date } from 'superstruct';


function ClientChart() {	
	  	const [stockData, setStockData] = useState([]);
	
	    useEffect(() => {
	      fetchItems();
	    }, []);
	
	    const fetchItems = async () => {
	      const data = await fetch('/data');
	      const dataSet = await data.json();
	      setStockData(dataSet);
			};
			// async make the stockData null initially */
			var firstData = stockData;
			var openDataCollection =['open'];
			var closeDataCollection = ['close'];
			var highDataCollection = ['high'];
			var lowDataCollection = ['low'];

			firstData = firstData.slice(Math.max(firstData.length - 500, 1));
			var chartHeading = [['Date', 'Open']];
			var chartFirstData = firstData.map((data) => {
				openDataCollection.push(data.open);
				closeDataCollection.push(data.close);
				highDataCollection.push(data.high);
				lowDataCollection.push(data.low);

				return [data.date, data.open];
			});
			var firstCohlData = [openDataCollection, closeDataCollection, highDataCollection, lowDataCollection];
			var firstState =  [...chartHeading, ...chartFirstData];

		const [newData, setnewData] = useState([]);
		const [timeLine, setTimeLine] = useState(500);
		const [checkBoxData, setcheckBoxData] = useState([true, false, false, false]);
 
	  function updateData(updatedArr, checkBoxValues) {
			setcheckBoxData(checkBoxValues);
	    setnewData(updatedArr);	    
	  }
	
	  function timelineUpdate(newTimeFrame) {

			var dataForManipulation;
			if(timeLine >= newTimeFrame) {
				dataForManipulation = newData;
			} else {
				var updatedFirstState = firstState;
				updatedFirstState.map((mData) => {
					mData.splice(1, 1);
					return mData;
				});
				const updatedCheckBoxData = checkBoxData;

				for(var i = 0; i < updatedCheckBoxData.length; i++) {
						if(updatedCheckBoxData[i]) {
							const valToAdd = firstCohlData[i];
							updatedFirstState.map((UFSdata,UFSindex) => {
                UFSdata.push(valToAdd[UFSindex]);
                return UFSdata;
            	});
						}
				}				

				dataForManipulation = updatedFirstState;
			}

				var previousData = dataForManipulation;
				const labelData = previousData.slice(0,1);
				const remainingData = previousData.slice(Math.max(previousData.length - newTimeFrame, 1));
				const updateChart = [...labelData, ...remainingData];
				setnewData(updateChart);
				setTimeLine(newTimeFrame);	
	  }
	
	  return (
	    <>
	
	      <Sidebar parentCallback={updateData} chartValue={stockData} timeFrame={timeLine} updatedChartValue = {newData} />
	      <center>
	        <Header headerParentCall={timelineUpdate} />
					{ (newData.length === 0 || newData[0].length > 1) ?
	        <Chart
	          width={'1000px'}
	          height={'550px'}
	          chartType="Line"
	          loader={<div>Loading Chart</div>}
	          data={newData.length===0?firstState:newData}
	          options={{
	            chart: {
	              title: 'Current Market Price of Share',
	              subtitle: 'in millions of dollars (USD)',
	            },
	          }}
	          rootProps={{ 'data-testid': '3' }}
	        />   : <div class="block"> Please select any value to view chart </div>}</center>
	    </>
	  );
}

export default ClientChart;
