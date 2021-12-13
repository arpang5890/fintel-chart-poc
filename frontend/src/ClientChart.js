import React from 'react';
import { Chart } from "react-google-charts";
import 'chartjs-plugin-streaming';

export default class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {stockData: []};
    }

    componentDidMount() {
        fetch('/data')
            .then(response => response.json())
            .then(result => this.setState({stockData: result}));
    }
    
  render() {
	const {stockData} = this.state;
	var header = [
		      'Year',
		      'Open',
		      'Close',
		      'Low',
		      'High'		      		      
		    ];
	var chartRecords = [];
	chartRecords.push(header);
	var chartData = stockData.map((data) => {
		var str = data.date.split("-");
		var dateObj = new Date(str[1]+"/"+str[2]+"/"+str[0]);
		var year = dateObj.getFullYear().toString();
		var open = data.open;
		var close = data.close;
		var low = data.low;
		var high = data.high;		
		
		return [year,open,close,low,high];
	});
	
	for(var i=0;i<chartData.length;i++){
		chartRecords.push(chartData[i]);
	}
	
	console.log(chartRecords);
	return (
		    <Chart
			  width={'100%'}
			  height={'600px'}
			  chartType="Line"
			  loader={<div>Loading Chart</div>}
			  data={chartRecords}
			  options={{
			    chart: {
			      title: 'Yearly Tesla Stock Chart',
			      subtitle: 'in Percentage(%)',
			    },
			    vAxis: {title: 'Stock Prices(%)', minValue: 0, maxValue: 100},
	    		hAxis: {title: 'Years', minValue: 2000, maxValue: 2050},
			  }}
			  rootProps={{ 'data-testid': '3' }}
			/>
		  );
	}
}