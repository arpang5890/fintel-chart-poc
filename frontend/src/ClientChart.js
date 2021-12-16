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
			
			firstData = firstData.slice(Math.max(firstData.length - 500, 1));
			var chartHeading = [['Date', 'Open']];
			var chartFirstData = firstData.map((data) => {				
				return [data.date, data.open];
			});
			
			var firstState =  [...chartHeading, ...chartFirstData];
			
		
		// const [newData, setnewData] = useState([...firstState]);
		const [newData, setnewData] = useState([]);
		const [timeLine, setTimeLine] = useState(500);
		
	  function updateData(updatedArr) {
	    setnewData(updatedArr);	    
	  }
	
	  function timelineUpdate(newTimeFrame) {
			var previousData = newData;
			const labelData = previousData.slice(0,1);
			const remainingData = previousData.slice(Math.max(previousData.length - newTimeFrame, 1));
			// newDisplayValue = newDisplayValue.slice(Math.max(newDisplayValue.length - completeTimeFrame, 1));
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
