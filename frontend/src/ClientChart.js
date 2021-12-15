import './App.css';
import { Chart } from "react-google-charts";
import React, { useState, useEffect } from "react";
import  Sidebar from './pages/sideBar/sideBar';
import  Header  from './pages/header/header';


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
	  	
	  	var chartData = stockData.map((data,i) => {
			var day = i+1;
			var close = data.close;
			console.log("Stock Data:"+data.date+","+data.open+","+data.close+","+data.high+","+data.low);
			return [day,close];
		});
		var chartRecords = [];
		chartRecords.push(['Day','Amazon']);
	  	for(var i=0;i<chartData.length;i++){
			chartRecords.push(chartData[i]);
		}
	  	//console.log(chartRecords);
	  	var amazonData = chartRecords.slice(0, 500);
	  
	  const [newData, setnewData] = useState(chartRecords);
	  const [memoryData, setnewMemoryData] = useState(chartRecords);
	
	  function updateData(updatedArr) {
	    setnewData(updatedArr);
	    setnewMemoryData(updatedArr);
	  }
	
	  function timelineUpdate(newTimeFrame) {
	    setnewData(newTimeFrame);
	  }
	
	  return (
	    <>
	
	      <Sidebar parentCallback={updateData} chartValue={newData} />
	      <center>
	        <Header headerParentCall={timelineUpdate} completeData = {memoryData} />
	        <Chart
	          width={'1000px'}
	          height={'550px'}
	          chartType="Line"
	          loader={<div>Loading Chart</div>}
	          data={amazonData}
	          options={{
	            chart: {
	              title: 'Current Market Price of Share',
	              subtitle: 'in millions of dollars (USD)',
	            },
	          }}
	          rootProps={{ 'data-testid': '3' }}
	        /></center>
	    </>
	  );
}

export default ClientChart;
